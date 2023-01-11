const { Airplane } = require('../models/index');

const { StatusCodes } = require('http-status-codes');
const { AppError, ValidationError } = require('../utils/errors/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot fetch the Airplane',
                'There was some issue fetching the airplane, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = AirplaneRepository;