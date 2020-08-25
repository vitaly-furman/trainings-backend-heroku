"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const cron = require("node-cron");
const server_1 = require("./express/server");
const config_1 = require("./config");
const workerTrainingsValidator_1 = require("./express/worker/workerTrainingsValidator");
const { mongo, service } = config_1.default;
const initializeMongo = async () => {
    console.log('Connecting to Mongo...');
    await mongoose.connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    console.log('Mongo connection established');
};
const main = async () => {
    await initializeMongo();
    const server = new server_1.default(service.port);
    const workerTrainingsValidator = new workerTrainingsValidator_1.WorkerTrainingsValidator();
    cron.schedule(config_1.default.cron.timeInterval, async () => {
        await workerTrainingsValidator.workersTrainingsValidityCheck();
    });
    await server.start();
    console.log(`Server started on port: ${service.port}`);
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map