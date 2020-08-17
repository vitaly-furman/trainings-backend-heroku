"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerManager = void 0;
const model_1 = require("./model");
class WorkerManager {
    static getWorkers(query) {
        return model_1.default.find(query)
            .select('-_id -__v')
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
    static updateWorker(worker) {
        const updatedWorker = { ...worker };
        const query = { 'workerId': updatedWorker.workerId };
        return model_1.default.findOneAndUpdate(query, updatedWorker, { upsert: true });
    }
    static deleteWorker(query) {
        return model_1.default.findOneAndDelete(query);
    }
}
exports.WorkerManager = WorkerManager;
exports.default = WorkerManager;
//# sourceMappingURL=manager.js.map