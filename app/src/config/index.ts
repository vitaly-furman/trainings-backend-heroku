import * as env from 'env-var';
import './dotenv';

const config = {
    service: {
        port: parseInt(<string>process.env.PORT) || env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri: process.env.MONGO_URI || env.get('MONGO_URI').required().asUrlString(),
        workersCollectionName: process.env.MONGO_WORKERS_COLLECTION_NAME || env.get('MONGO_WORKERS_COLLECTION_NAME').required().asString(),
        trainingsCollectionName: process.env.MONGO_TRAININGS_COLLECTION_NAME || env.get('MONGO_TRAININGS_COLLECTION_NAME').required().asString(),
    },
};

export default config;
