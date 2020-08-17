import * as Joi from '@hapi/joi';

// GET /api/trainings
export const getTrainingRequestSchema = Joi.object({
    query: {},
    body: {},
    params: {},
});


// POST /api/trainings/
export const createTrainingRequestSchema = Joi.object({
    query: {},
    body: {
        name: Joi.string().required(),
    },
    params: {},
});
