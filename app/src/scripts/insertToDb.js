/* eslint-disable no-console */
const axios = require('axios');
const workers = require('./workers_data.json');

const arrayIncludesValue = (arr, value, fieldName) => {
    let ans = false;
    arr.forEach(element => {
        if (element[fieldName] == value) {
            ans = true;
        }
    });
    return ans;
}

const getTrainings = (workersData) => {
    const trainings = [];
    workersData.forEach(worker => {
        const workerTrainings = worker.trainings;
        if (workerTrainings) {
            workerTrainings.forEach(training => {
                if (!arrayIncludesValue(trainings, training.name, "name")) {
                    trainings.push({ "name": `${training.name}` });
                }
            })
        }
    });

    console.log(trainings);
    return trainings;
}


const pushAllWorkers = async (workersData) => {
    const promises = workersData.map((worker) => {
        return axios.post('http://localhost:8000/api/workers', worker);
    });
    await Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status, results.indexOf(result))));
}

const pushAllTrainings = async (workersData) => {
    const trainings = getTrainings(workersData);
    const promises = trainings.map((training) => {
        return axios.post('http://localhost:8000/api/trainings', training);
    });
    await Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status, results.indexOf(result))));
}


const main = async () => {
    await pushAllWorkers(workers);
    await pushAllTrainings(workers);
};

main();
