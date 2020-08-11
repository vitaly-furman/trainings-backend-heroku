/* eslint-disable no-console */
const axios = require('axios');
const workers = require('./workers_data.json');

const main = async () => {
    const promises = workers.map((worker) => {
        return axios.post('http://localhost:8000/api/workers', worker);
    });
    await Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status, results.indexOf(result))));
};

main();
