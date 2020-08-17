"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisePipe = void 0;
const stream_1 = require("stream");
const util_1 = require("util");
exports.promisePipe = util_1.promisify(stream_1.pipeline);
//# sourceMappingURL=index.js.map