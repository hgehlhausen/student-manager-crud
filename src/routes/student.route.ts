import * as express from 'express';
import {StudentsService} from '../services/students.service';

let studentApi = express.Router();

studentApi.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

studentApi.post('/create', (req, res, next) => {
    console.log('Getting Here 2');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new StudentsService(req, res, next);
    studentsService.create();
});
studentApi.get('/list', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new StudentsService(req, res, next);
    studentsService.list();
});
studentApi.get('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new StudentsService(req, res, next);
    studentsService.read();
});
studentApi.post('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new StudentsService(req, res, next);
    studentsService.update();
});

studentApi.post('/delete/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new StudentsService(req, res, next);
    studentsService.delete();
});

export = studentApi;