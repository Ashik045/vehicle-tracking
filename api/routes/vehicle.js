// external imports
const express = require('express');
const { createVehicel, getVehicle, getAllVehicles } = require('../controllers/vehicleCroltroller');

const router = express.Router();

// create vehicle
router.post('/vehicle/create', createVehicel);

// get vehicle by id
router.get('/vehicle/:id', getVehicle);

// get all vehicles
router.get('/vehicles', getAllVehicles);

module.exports = router;
