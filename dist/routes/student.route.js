"use strict";
const express = require("express");
const students_service_1 = require("../services/students.service");
let studentApi = express.Router();
studentApi.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
studentApi.post('/create', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new students_service_1.StudentsService(req, res, next);
    studentsService.create();
});
studentApi.get('/list', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new students_service_1.StudentsService(req, res, next);
    studentsService.list();
});
studentApi.get('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new students_service_1.StudentsService(req, res, next);
    studentsService.read();
});
studentApi.post('/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new students_service_1.StudentsService(req, res, next);
    studentsService.update();
});
studentApi.post('/delete/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let studentsService = new students_service_1.StudentsService(req, res, next);
    studentsService.delete();
});
module.exports = studentApi;
//# sourceMappingURL=student.route.js.map