import * as express from 'express';
import { WorkerManager } from './manager';

class WorkerController {
    static async getWorkers(req: express.Request, res: express.Response) {
        res.json(await WorkerManager.getWorkers(req.query));
    }
    static async getWorkerTrainings(req: express.Request, res: express.Response) {
        res.json(await WorkerManager.getWorkerTrainings(req.query));
    }

    static async createWorker(req: express.Request, res: express.Response) {
        res.json(await WorkerManager.createWorker(req.body));
    }
}

export default WorkerController;
