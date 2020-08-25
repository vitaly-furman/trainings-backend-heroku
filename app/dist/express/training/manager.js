"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class TrainingManager {
    static getTrainings(query) {
        return model_1.default.find(query)
            .select('-_id -__v')
            .exec();
    }
    static createTraining(training) {
        const newTraining = { ...training };
        return model_1.default.create(newTraining);
    }
}
exports.TrainingManager = TrainingManager;
exports.default = TrainingManager;
//# sourceMappingURL=manager.js.map