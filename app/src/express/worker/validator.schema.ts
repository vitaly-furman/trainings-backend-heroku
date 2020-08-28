import * as Joi from '@hapi/joi';

// GET /api/forlders?name=test1
export const getWorkersRequestSchema = Joi.object({
    query: {
        firstName: Joi.string(),
        workerId: Joi.string(),
    },
    body: {},
    params: {},
});

// DELETE /api/forlders?name=test1
export const deleteWorkerRequestSchema = Joi.object({
    query: {
        workerId: Joi.string(),
    },
    body: {},
    params: {},
});


// POST /api/workers/
export const createWorkerRequestSchema = Joi.object({
    body: {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        workerId: Joi.any().required(),
        birthDate: Joi.string(),
        age: Joi.number(),
        sex: Joi.string(),
        startDate: Joi.string(),
        idNumber: Joi.any(),
        phoneNumber: Joi.any(),
        phoneNumber2: Joi.any(),
        city: Joi.string(),
        address: Joi.string(),
        zipCode: Joi.any(),
        departmentHE: Joi.string(),
        departmentEN: Joi.string(),
        roleEmergency: Joi.string(),
        role: Joi.string(),
        team: Joi.string(),
        trainings: Joi.array(),
    },
    query: {},
    params: {},
});


// PUT /api/workers/
export const updateWorkersRequestSchema = Joi.object({
    body: Joi.array().items({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        workerId: Joi.any().required(),
        birthDate: Joi.string(),
        age: Joi.number(),
        sex: Joi.string(),
        startDate: Joi.string(),
        idNumber: Joi.any(),
        phoneNumber: Joi.any(),
        phoneNumber2: Joi.any(),
        city: Joi.string(),
        address: Joi.string(),
        zipCode: Joi.any(),
        departmentHE: Joi.string(),
        departmentEN: Joi.string(),
        roleEmergency: Joi.string(),
        role: Joi.string(),
        team: Joi.string(),
        trainings: Joi.array(),
    }),
    query: {},
    params: {},
});
