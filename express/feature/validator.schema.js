"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.getFoldersRequestSchema = Joi.object({
    query: {
        name: Joi.string().alphanum(),
        folderId: Joi.string().uuid(),
    },
    body: {},
    params: {},
});
exports.createFolderRequestSchema = Joi.object({
    body: {
        name: Joi.string().alphanum().required(),
    },
    query: {},
    params: {},
});
//# sourceMappingURL=validator.schema.js.map