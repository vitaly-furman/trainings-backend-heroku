"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide3 = exports.multiply3 = exports.subtract3 = exports.add3 = void 0;
const math = require("./simpleModuleToMock");
exports.add3 = (a) => math.add(a, 3);
exports.subtract3 = (a) => math.subtract(a, 3);
exports.multiply3 = (a) => math.multiply(a, 3);
exports.divide3 = (a) => math.divide(a, 3);
//# sourceMappingURL=simpleModuleUsingMocked.js.map