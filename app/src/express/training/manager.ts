import TrainingModel from './model';
import { ITraining } from './interface';

export class TrainingManager {
    static getTrainings(query: Partial<ITraining>) {
        return TrainingModel.find(query)
            .select('-_id -__v')
            .exec();
    }

    static createTraining(training: ITraining) {
        const newTraining = { ...training };
        return TrainingModel.create(newTraining);
    }
}

export default TrainingManager;
