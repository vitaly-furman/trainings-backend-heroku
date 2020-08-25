import { WorkerManager } from './manager';
import { IWorker, ITraining } from './interface';
import { Mailer } from '../../utils/mailer'


export class WorkerTrainingsValidator {
    private mailer: Mailer;

    constructor() {
        this.mailer = new Mailer();
    }

    async getWorkers() {
        return await WorkerManager.getWorkers({});
    }

    async workersTrainingsValidityCheck() {
        const workers = await this.getWorkers();
        const result: IWorker[] = [];
        workers.forEach(worker => {
            const workersExpiredTrainings = this.workerTrainingsValidyCheck(worker);
            if (workersExpiredTrainings.length > 0) {
                worker.trainings = workersExpiredTrainings
                result.push(worker);
            }
        });
        this.sendAlertMessage(result);
    }

    private sendAlertMessage(workers: IWorker[]) {
        workers.forEach(worker => {
            const subject = `Worker training about to expire - ${worker.firstName} ${worker.lastName}`
            worker.trainings.forEach(training => {
                const text = `This is an automatic message, the training: ${training.name} is about to expire in ${training.expiryDate}.`;
                console.log(subject, text);
                this.mailer.send(subject, text);
            });
        })
    }



    workerTrainingsValidyCheck(worker: IWorker) {
        let expiredTrainings: ITraining[] = [];
        worker.trainings.forEach(training => {
            if (this.isTrainingExpiryLessThanMonth(training)) {
                expiredTrainings.push(training);
            }
        });
        return expiredTrainings;
    }

    isTrainingExpiryLessThanMonth(training: any) {
        const nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        const expiryDate = new Date(training.expiryDate);
        return nextMonthDate > expiryDate;
    }
}