import * as express from 'express';
import * as studentApi from "./student.route";
import * as bodyParser from 'body-parser';


let api = express.Router();

api.get('/', (req, res, next) => {
    res.send("Live");
});

api.use('/student', studentApi);

export = api;