const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const { CityController, FlightController, AirportController } = require('../../controllers/index');

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.get('/airports/city/:id',CityController.getAirports);
router.post('/cities',CityController.createMultiple);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

router.post('/airports',AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);
router.patch('/airports/:id', AirportController.update);

module.exports = router; 