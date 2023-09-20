/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

// create a new schema
const vehicleSchema = new mongoose.Schema(
    {
        name: String,
        lat: Number,
        lng: Number,
        moving: String,
        speed: Number,
        distanceCovered: Number,
        status: String,
    },
    { timestamps: true }
);

// Create a model based on the schema
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
