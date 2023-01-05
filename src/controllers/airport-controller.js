const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully created the airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully deleted an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to delete the airport'
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to fetch an airport'
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await airportService.getAll();
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to fetch an airport'
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to update the airport'
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}