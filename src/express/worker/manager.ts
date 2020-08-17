import WorkerModel from './model';
import { IWorker } from './interface';

export class WorkerManager {
    static getWorkers(query: Partial<IWorker>) {
        return WorkerModel.find(query)
            .select('-_id -__v')
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

    static updateWorker(worker: IWorker) {
        const updatedWorker = { ...worker };
        const query = { 'workerId': updatedWorker.workerId };
        return WorkerModel.findOneAndUpdate(query, updatedWorker, { upsert: true });
    }

    static deleteWorker(query: Partial<IWorker>) {
        return WorkerModel.findOneAndDelete(query);
    }
}

export default WorkerManager;
