"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../../config");
const TrainingSchema = new mongoose.Schema({
    name: { type: String },
});
const TrainingModel = mongoose.model(config_1.default.mongo.trainingsCollectionName, TrainingSchema);
exports.default = TrainingModel;
//# sourceMappingURL=model.js.map