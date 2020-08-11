import { Request } from 'express';

class WorkerValidator {
    static async somethingThatIsImpossibleToValidateWithSchema(_req: Request) {
        // Some validations
    }
}

export default WorkerValidator;
