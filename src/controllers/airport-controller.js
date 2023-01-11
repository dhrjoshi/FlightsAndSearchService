const { StatusCodes } = require('http-status-codes');

const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully created the airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully deleted an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await airportService.getAll();
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated an airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.EXPECTATION_FAILED).json({
            data: {},
            success: false,
            err: error.explanation,
            message: error.message
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