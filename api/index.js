const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');

// internal imports
const vehicleRoute = require('./routes/vehicle');

// modules
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement the updateVehiclePositions function to update vehicle positions
function updateVehiclePositions() {
    // Implement logic to update vehicle positions here
    // This function should return the updated list of vehicles
    // You can mock this data for testing
    const updatedVehicles = 'hello';
    return updatedVehicles;
}

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A client connected');

    // Handle real-time updates here
    // You can emit updates to connected clients whenever vehicle positions change
    // For example, emit updates when you receive new data from a source

    // Example: Emit a message to all connected clients every second
    setInterval(() => {
        const updatedVehicles = updateVehiclePositions(); // function to update vehicle positions
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

// routes
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
app.listen(process.env.APPLICATION_PORT || 4000, () => {
    console.log(`Application running on port ${process.env.APPLICATION_PORT}`);
});
