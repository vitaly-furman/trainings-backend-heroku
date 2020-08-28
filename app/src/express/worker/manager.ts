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

    static async updateWorkers(workers: IWorker[]) {
        const updatedWorkers = [ ...workers ];
        console.log(updatedWorkers);
        const promises = updatedWorkers.map(worker => {
            return WorkerModel.findOneAndUpdate({ 'workerId': worker.workerId }, worker, { upsert: false });
        });
        return Promise.all(promises);
    }

    static deleteWorker(query: Partial<IWorker>) {
        return WorkerModel.findOneAndDelete(query);
    }
}

export default WorkerManager;
