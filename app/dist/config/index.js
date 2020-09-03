"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("env-var");
require("./dotenv");
const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asUrlString(),
        workersCollectionName: env.get('MONGO_WORKERS_COLLECTION_NAME').required().asString(),
        trainingsCollectionName: env.get('MONGO_TRAININGS_COLLECTION_NAME').required().asString(),
    },
    mailer: {
        mailUser: env.get('MAILER_USER').asString() || 'spectronix.emerson@gmail.com',
        mailPass: env.get('MAILER_PASS').asString() || 'spectronix12312300',
        mailTo: env.get('MAILER_TO').asString() || 'furman4488@gmail.com'
    },
    cron: {
        timeInterval: env.get('CRON_TIME_INTERVAL').asString() || '0 8 * * 0',
        everyDay: env.get('CRON_EVERY_DAY').asString() || '0 8 * * *',
        everyMinute: env.get('CRON_EVERY_MINUTE').asString() || '* * * * *'
    }
};
exports.default = config;
//# sourceMappingURL=index.js.map