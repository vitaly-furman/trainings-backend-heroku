import { Router } from 'express';
import WorkerController from './controller';
import WorkerValidator from './validator';
import { wrapController, wrapValidator } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { getWorkersRequestSchema, createWorkerRequestSchema, deleteWorkerRequestSchema, updateWorkersRequestSchema } from './validator.schema';

const workerRouter: Router = Router();

workerRouter.get('/', ValidateRequest(getWorkersRequestSchema), wrapController(WorkerController.getWorkers));
workerRouter.get('/trainings', ValidateRequest(getWorkersRequestSchema), wrapController(WorkerController.getWorkerTrainings));
workerRouter.post('/', ValidateRequest(createWorkerRequestSchema), wrapController(WorkerController.createWorker));
workerRouter.put('/', ValidateRequest(updateWorkersRequestSchema), wrapController(WorkerController.updateWorkers));
workerRouter.delete('/', ValidateRequest(deleteWorkerRequestSchema), wrapController(WorkerController.deleteWorker));

workerRouter.get('/hardToValidateWithSchema', wrapValidator(WorkerValidator.somethingThatIsImpossibleToValidateWithSchema));

export default workerRouter;
