import WorkerModel from './model';
import { IWorker } from './interface';

export class WorkerManager {
    static getWorkers(query: Partial<IWorker>) {
        return WorkerModel.find(query)
        .select('-_id -__v -trainings')
        .exec();
    }
    static getWorkerTrainings(query: Partial<IWorker>) {
        return WorkerModel.findOne(query)
        .select('trainings')
        .exec();
    }

    static createWorker(worker: IWorker) {
        const newWorker = { ...worker };
        return WorkerModel.create(newWorker);
    }
}

export default WorkerManager;
