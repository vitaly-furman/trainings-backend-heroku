import * as mongoose from 'mongoose';

import { IWorker } from './interface';
import config from '../../config';

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

const WorkerModel = mongoose.model<IWorker & mongoose.Document>(config.mongo.featureCollectionName, WorkerSchema);

export default WorkerModel;
