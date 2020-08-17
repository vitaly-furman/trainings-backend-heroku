import { Router } from 'express';
import TrainingsController from './controller';
import { wrapController } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { getTrainingRequestSchema, createTrainingRequestSchema } from './validator.schema';

const trainingRouter: Router = Router();

trainingRouter.get('/', ValidateRequest(getTrainingRequestSchema), wrapController(TrainingsController.getTrainings));
trainingRouter.post('/', ValidateRequest(createTrainingRequestSchema), wrapController(TrainingsController.createTraining));

export default trainingRouter;
