/* eslint-disable no-console */
import * as mongoose from 'mongoose';
import * as cron from 'node-cron';
import Server from './express/server';
import config from './config';
import { WorkerTrainingsValidator } from './express/worker/workerTrainingsValidator';



const { mongo, service } = config;


const initializeMongo = async () => {
    console.log('Connecting to Mongo...');

    await mongoose.connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

    console.log('Mongo connection established');
};



const main = async () => {
    await initializeMongo();

    const server = new Server(service.port);
    const workerTrainingsValidator = new WorkerTrainingsValidator();

    cron.schedule(config.cron.timeInterval, async () => {
        await workerTrainingsValidator.workersTrainingsValidityCheck();
    });

    await server.start();

    console.log(`Server started on port: ${service.port}`);
};

main().catch((err) => console.error(err));
