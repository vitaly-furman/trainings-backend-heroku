import * as express from 'express';
import { TrainingManager } from './manager';

class TrainingsController {
    static async getTrainings(req: express.Request, res: express.Response) {
        res.json(await TrainingManager.getTrainings(req.query));
    }

    static async createTraining(req: express.Request, res: express.Response) {
        res.json(await TrainingManager.createTraining(req.body));
    }
}

export default TrainingsController;
