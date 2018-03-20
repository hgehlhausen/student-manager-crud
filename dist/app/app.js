"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apiRoutes = require("../routes/api.route");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.appInstance = express();
        this.middleWare();
        this.mountRoutes();
    }
    mountRoutes() {
        let router = express.Router();
        router.all('/', (req, res, next) => {
            console.log('Checking All Calls');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });
        this.appInstance.use('/api', apiRoutes);
    }
    middleWare() {
        this.appInstance.use(bodyParser.json());
        this.appInstance.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.default = new App().appInstance;
//# sourceMappingURL=app.js.map