import * as env from 'env-var';
import './dotenv';

const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asUrlString(),
        featureCollectionName: env.get('MONGO_FEATURE_COLLECTION_NAME').required().asString(),
    },
};

export default config;
