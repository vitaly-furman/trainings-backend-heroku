"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("env-var");
require("./dotenv");
const config = {
    service: {
        port: 8000 || env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri: "mongodb+srv://user1:user1pass@cluster0.6lbky.mongodb.net/training-system?retryWrites=true&w=majority" || env.get('MONGO_URI').required().asUrlString(),
        workersCollectionName: "workers" || env.get('MONGO_WORKERS_COLLECTION_NAME').required().asString(),
        trainingsCollectionName: "trainings" || env.get('MONGO_TRAININGS_COLLECTION_NAME').required().asString(),
    },
};
exports.default = config;
//# sourceMappingURL=index.js.map