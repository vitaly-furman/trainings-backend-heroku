"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const express_2 = require("../../utils/express");
const joi_1 = require("../../utils/joi");
const validator_schema_1 = require("./validator.schema");
const trainingRouter = express_1.Router();
trainingRouter.get('/', joi_1.default(validator_schema_1.getTrainingRequestSchema), express_2.wrapController(controller_1.default.getTrainings));
trainingRouter.post('/', joi_1.default(validator_schema_1.createTrainingRequestSchema), express_2.wrapController(controller_1.default.createTraining));
exports.default = trainingRouter;
//# sourceMappingURL=router.js.map