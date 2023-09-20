const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');

// internal imports
const vehicleRoute = require('./routes/vehicle');
const Vehicle = require('./models/vehicles');

// modules
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement the updateVehiclePositions function to update vehicle positions
const updateVehiclePositions = async () => {
    try {
        // Implement logic to fetch vehicle data from MongoDB
        const updatedVehicles = await Vehicle.find(); // You may need to add filters if required
        return updatedVehicles;
    } catch (error) {
        console.error('Error updating vehicle positions:', error);
        return [];
    }
};

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A client connected');

    // Emit vehicle data to clients when they connect
    socket.on('getInitialData', async () => {
        const updatedVehicles = await updateVehiclePositions();
        socket.emit('vehicleUpdates', updatedVehicles);
    });

    // Handle real-time updates here
    // Example: Emit updates to connected clients when new data arrives
    // Update the emit logic as per your requirements
    setInterval(async () => {
        const updatedVehicles = await updateVehiclePositions();
        socket.emit('vehicleUpdates', updatedVehicles);
    }, 1000);

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

// connnect to database
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connection successful.');
    })
    .catch((err) => {
        console.log(err);
    });

// application routes
app.get('/', (req, res) => res.status(200).json({ message: 'OK' }));
app.use('/api', vehicleRoute);

// error handlers
// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Requested URL not found!',
    });
});
// default handler
app.use((err, req, res, next) => {
    res.status(500).json({
        error: 'Internal Server Error!',
    });
});

// server running
/* listening for incoming requests on the specified port. */
app.listen(process.env.PORT || 4000, () => {
    console.log(`Application running on port ${process.env.PORT}`);
});
