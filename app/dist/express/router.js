"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("./worker/router");
const router_2 = require("./training/router");
const appRouter = express_1.Router();
appRouter.use('/api/workers', router_1.default);
appRouter.use('/api/trainings', router_2.default);
appRouter.use('/isAlive', (_req, res) => {
    res.status(200).send('alive');
});
appRouter.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
});
exports.default = appRouter;
//# sourceMappingURL=router.js.map