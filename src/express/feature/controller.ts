import * as express from 'express';
import { FeatureManager } from './manager';

class FeatureController {
    static async getFolders(req: express.Request, res: express.Response) {
        res.json(await FeatureManager.getFolders(req.query));
    }

    static async createFolder(req: express.Request, res: express.Response) {
        res.json(await FeatureManager.createFolder(req.body));
    }
}

export default FeatureController;
