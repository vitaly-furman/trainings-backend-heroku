"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
class TrainingsController {
    static async getTrainings(req, res) {
        res.json(await manager_1.TrainingManager.getTrainings(req.query));
    }
    static async createTraining(req, res) {
        res.json(await manager_1.TrainingManager.createTraining(req.body));
    }
}
exports.default = TrainingsController;
//# sourceMappingURL=controller.js.map