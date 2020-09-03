"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static async updateWorkers(workers) {
        const updatedWorkers = [...workers];
        console.log(updatedWorkers);
        const promises = updatedWorkers.map(worker => {
            return model_1.default.findOneAndUpdate({ 'workerId': worker.workerId }, worker, { upsert: true });
        });
        return Promise.all(promises);
    }
    static deleteWorker(query) {
        return model_1.default.findOneAndDelete(query);
    }
}
exports.WorkerManager = WorkerManager;
exports.default = WorkerManager;
//# sourceMappingURL=manager.js.map