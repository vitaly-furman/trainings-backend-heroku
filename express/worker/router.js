"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validator_1 = require("./validator");
const express_2 = require("../../utils/express");
const joi_1 = require("../../utils/joi");
const validator_schema_1 = require("./validator.schema");
const workerRouter = express_1.Router();
workerRouter.get('/workers', joi_1.default(validator_schema_1.getWorkersRequestSchema), express_2.wrapController(controller_1.default.getWorkers));
workerRouter.get('/workers/trainings', joi_1.default(validator_schema_1.getWorkersRequestSchema), express_2.wrapController(controller_1.default.getWorkerTrainings));
workerRouter.post('/workers', joi_1.default(validator_schema_1.createWorkerRequestSchema), express_2.wrapController(controller_1.default.createWorker));
workerRouter.get('/workers/hardToValidateWithSchema', express_2.wrapValidator(validator_1.default.somethingThatIsImpossibleToValidateWithSchema));
exports.default = workerRouter;
//# sourceMappingURL=router.js.map