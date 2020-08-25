export interface ITraining {
    name: string;
    isRequired: string;
    status: string;
    completionDate: string;
    expiryDate: string;
    trainerName: string;
}

export interface IWorker {
    workerId: string;
    lastName: string;
    firstName: string;
    birthDate: string;
    age: number;
    sex: string;
    startDate: string;
    idNumber: string;
    phoneNumber: string;
    phoneNumber2: string;
    city: string;
    address: string;
    zipCode: string;
    departmentHE: string;
    departmentEN: string;
    roleEmergency: string;
    role: string;
    team: string;
    trainings: ITraining[];
}
