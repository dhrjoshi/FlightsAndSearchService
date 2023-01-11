const { StatusCodes } = require('http-status-codes');
const { ValidationError, AppError } = require('../utils/errors/index');

class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Unable to create',
                'There was some issue creating the required field, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Unable to delete',
                'There was some issue deleting the required field, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Unable to fetch',
                'There was some issue fetching the required field, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    } 

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Unable to fetch ',
                'There was some issue fetching the required field, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(modelId , data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            throw new AppError(
                'RepositoryError',
                'Unable to update',
                'There was some issue updating the required field, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = CrudRepository;