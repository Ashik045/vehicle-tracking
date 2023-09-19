const Vehicle = require('../models/vehicles');

// Controller to create a vehicle
const createVehicel = async (req, res) => {
    try {
        // Get vehicle data from the request body
        const newVehicle = new Vehicle(req.body);

        // save the vehicle
        await newVehicle.save();

        res.status(201).json({ message: 'Vehicle created successfully', vehicle: newVehicle });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// Controller to get a vehicle by ID
const getVehicle = async (req, res) => {
    try {
        const vehicleId = req.params.id; // Get the vehicle ID from the URL parameter

        // Use Mongoose to find the vehicle by its ID
        const vehicle = await Vehicle.findById(vehicleId);

        if (!vehicle) {
            // If the vehicle with the provided ID doesn't exist, return a 404 Not Found response
            res.status(404).json({ message: 'Vehicle not found' });
        }

        // If the vehicle exists, return it in the response
        res.status(200).json({ message: vehicle });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller to get all vehicles with optional filters
const getAllVehicles = async (req, res) => {
    try {
        const searchText = req.query.search; // Get the search text from query parameters
        const statusFilter = req.query.filter; // Get the status filter from query parameters

        const query = {}; // Initialize an empty query object

        // Apply the search filter if searchText is provided
        if (searchText) {
            query.name = { $regex: searchText, $options: 'i' }; // Case-insensitive search by vehicle name
        }

        // Apply the status filter if statusFilter is provided
        if (statusFilter) {
            if (statusFilter === 'active' || statusFilter === 'inactive') {
                query.status = statusFilter; // Filter by vehicle status
            } else if (statusFilter === 'all') {
                // Do nothing, retrieve all vehicles
            } else {
                // Invalid status filter value, return a 400 Bad Request response
                res.status(400).json({ message: 'Invalid status filter value' });
            }
        }

        // Use Mongoose to find vehicles based on the query
        const vehicles = await Vehicle.find(query);

        // Return the filtered vehicles in the response
        res.status(200).json({ message: vehicles });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createVehicel,
    getVehicle,
    getAllVehicles,
};
