"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../../config");
const TrainingSchema = new mongoose.Schema({
    name: { type: String },
    isRequired: { type: String },
    status: { type: String },
    completionDate: { type: String },
    expiryDate: { type: String },
    trainerName: { type: String },
});
const WorkerSchema = new mongoose.Schema({
    workerId: {
        type: String,
        required: true,
        unique: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
    },
    age: {
        type: Number,
    },
    sex: {
        type: String,
    },
    startDate: {
        type: String,
    },
    idNumber: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    phoneNumber2: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    departmentHE: {
        type: String,
    },
    departmentEN: {
        type: String,
    },
    roleEmergency: {
        type: String,
    },
    role: {
        type: String,
    },
    team: {
        type: String,
    },
    trainings: {
        type: [TrainingSchema],
    },
});
const WorkerModel = mongoose.model(config_1.default.mongo.featureCollectionName, WorkerSchema);
exports.default = WorkerModel;
//# sourceMappingURL=model.js.map