import { Router } from 'express';
import WorkerController from './controller';
import WorkerValidator from './validator';
import { wrapController, wrapValidator } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { getWorkersRequestSchema, createWorkerRequestSchema } from './validator.schema';

const workerRouter: Router = Router();

workerRouter.get('/workers', ValidateRequest(getWorkersRequestSchema), wrapController(WorkerController.getWorkers));
workerRouter.get('/workers/trainings', ValidateRequest(getWorkersRequestSchema), wrapController(WorkerController.getWorkerTrainings));
workerRouter.post('/workers', ValidateRequest(createWorkerRequestSchema), wrapController(WorkerController.createWorker));
workerRouter.get('/workers/hardToValidateWithSchema', wrapValidator(WorkerValidator.somethingThatIsImpossibleToValidateWithSchema));

export default workerRouter;
