"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const events_1 = require("events");
const error_1 = require("./error");
const router_1 = require("./router");
class Server {
    constructor(port) {
        this.app = Server.createExpressApp();
        this.port = port;
    }
    static createExpressApp() {
        const app = express();
        app.use(cors());
        app.use(helmet());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(router_1.default);
        app.use(error_1.errorMiddleware);
        return app;
    }
    async start() {
        this.http = this.app.listen(this.port);
        await events_1.once(this.http, 'listening');
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map