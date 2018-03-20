"use strict";
const express = require("express");
const studentApi = require("./student.route");
let api = express.Router();
api.get('/', (req, res, next) => {
    res.send("Live");
});
api.use('/student', studentApi);
module.exports = api;
//# sourceMappingURL=api.route.js.map