"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.getTrainingRequestSchema = Joi.object({
    query: {},
    body: {},
    params: {},
});
exports.createTrainingRequestSchema = Joi.object({
    query: {},
    body: {
        name: Joi.string().required(),
    },
    params: {},
});
//# sourceMappingURL=validator.schema.js.map