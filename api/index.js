/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// internal imports

// modules
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Edge Functions
// connnect ot database
// mongoose
//   .connect(`${process.env.MONGODB_CONNECTION_STRING_MAIN}`)
//   .then(() => {
//     console.log("MongoDB connection successful");
//   })
//   .catch((err: object) => {
//     console.log(err);
//   });

// routes
app.get('/', (req, res) => res.status(200).json({ message: 'OK' }));

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
app.listen(process.env.APPLICATION_PORT, () => {
    console.log(`Application running on port ${process.env.APPLICATION_PORT}`);
});
