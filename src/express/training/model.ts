import * as mongoose from 'mongoose';

import { ITraining } from './interface';
import config from '../../config';

const TrainingSchema = new mongoose.Schema({
    name: { type: String },
});

const TrainingModel = mongoose.model<ITraining & mongoose.Document>(config.mongo.trainingsCollectionName, TrainingSchema);

export default TrainingModel;
