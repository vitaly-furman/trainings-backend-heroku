"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapValidator = (func) => {
    return (req, _res, next) => {
        func(req)
            .then(() => next())
            .catch(next);
    };
};
exports.wrapController = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    };
};
//# sourceMappingURL=index.js.map