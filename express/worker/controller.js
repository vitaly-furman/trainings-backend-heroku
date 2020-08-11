"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
class WorkerController {
    static async getWorkers(req, res) {
        res.json(await manager_1.WorkerManager.getWorkers(req.query));
    }
    static async getWorkerTrainings(req, res) {
        res.json(await manager_1.WorkerManager.getWorkerTrainings(req.query));
    }
    static async createWorker(req, res) {
        res.json(await manager_1.WorkerManager.createWorker(req.body));
    }
}
exports.default = WorkerController;
//# sourceMappingURL=controller.js.map