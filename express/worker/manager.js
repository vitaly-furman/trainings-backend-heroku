"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class WorkerManager {
    static getWorkers(query) {
        return model_1.default.find(query)
            .select('-_id -__v -trainings')
            .exec();
    }
    static getWorkerTrainings(query) {
        return model_1.default.findOne(query)
            .select('trainings')
            .exec();
    }
    static createWorker(worker) {
        const newWorker = { ...worker };
        return model_1.default.create(newWorker);
    }
}
exports.WorkerManager = WorkerManager;
exports.default = WorkerManager;
//# sourceMappingURL=manager.js.map