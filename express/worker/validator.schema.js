"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.getWorkersRequestSchema = Joi.object({
    query: {
        firstName: Joi.string(),
        workerId: Joi.string(),
    },
    body: {},
    params: {},
});
exports.createWorkerRequestSchema = Joi.object({
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
//# sourceMappingURL=validator.schema.js.map