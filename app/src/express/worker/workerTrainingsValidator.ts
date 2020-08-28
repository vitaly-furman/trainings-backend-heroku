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
        // {'trainingName' : [worker1, worker2, ...]} all workers that have that training expired
        const trainingsToWorkers = {}; 
        workers.forEach(worker => {
            const workersExpiredTrainings = this.workerTrainingsValidyCheck(worker);
            workersExpiredTrainings.forEach(training => {
                if(!trainingsToWorkers.hasOwnProperty(training.name)){
                    trainingsToWorkers[training.name] = [];
                }
                trainingsToWorkers[training.name].push(worker);
            })
        });
        this.sendAlertMessage(trainingsToWorkers);
    }
    
    // async workersTrainingsValidityCheck() {
    //     const workers = await this.getWorkers();
    //     const result: IWorker[] = [];
    //     workers.forEach(worker => {
    //         const workersExpiredTrainings = this.workerTrainingsValidyCheck(worker);
    //         if (workersExpiredTrainings.length > 0) {
    //             worker.trainings = workersExpiredTrainings
    //             result.push(worker);
    //         }
    //     });
    //     this.sendAlertMessage(result);
    // }

    private sendAlertMessage(trainingsToWorkers: { [x: string]: IWorker[]; }) {
        for(const trainingName in trainingsToWorkers){
            const subject = `Training is about to expire - ${trainingName}`;
            let text = '';
            trainingsToWorkers[trainingName].forEach(worker => {
                const workerText = `${worker.firstName} ${worker.lastName} - ${worker.workerId}\n`;
                text += workerText;
            })
            this.mailer.send(subject, text);
        }
        
        // workers.forEach(worker => {
        //     const subject = `Worker training about to expire - ${worker.firstName} ${worker.lastName}`
        //     worker.trainings.forEach(training => {
        //         const text = `This is an automatic message, the training: ${training.name} is about to expire in ${training.expiryDate}.`;
        //         console.log(subject, text);
        //         this.mailer.send(subject, text);
        //     });
        // })
    }



    workerTrainingsValidyCheck(worker: IWorker) {
        let expiredTrainings: ITraining[] = [];
        worker.trainings.forEach(training => {
            const mostRecentTraining = this.getMostRecentTraining(worker, training);
            if (this.isTrainingExpiryLessThanMonth(mostRecentTraining) && !this.trainingExistInTrainingsList(expiredTrainings, training.name)) {
                expiredTrainings.push(mostRecentTraining);
            }
        });
        return expiredTrainings;
    }

    trainingExistInTrainingsList(trainings: ITraining[], trainingName: string){
        let result = false;
        trainings.forEach(training => {
            if(training.name === trainingName) result = true;
        });
        return result;
    }

    getMostRecentTraining(worker: IWorker, training: ITraining): ITraining{
        let mostRecentTraining: ITraining = training;
        worker.trainings.forEach(workerTraining => {
            if(workerTraining.name === mostRecentTraining.name && workerTraining.expiryDate > mostRecentTraining.expiryDate) {
                mostRecentTraining = workerTraining
            }
        })
        return mostRecentTraining;
    }

    isTrainingExpiryLessThanMonth(training: any) {
        const nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        const expiryDate = new Date(training.expiryDate);
        return nextMonthDate > expiryDate;
    }
}