const express = require('express');
const route = express.Router();

const multer = require("multer");
const config = require('./src/config/multer');

const home = require('./src/controllers/home');
const login = require('./src/controllers/login');

route.get('/', home.pagInicialGet);
route.get('/login', login.loadPage);
route.post('/login', login.loginIn);

module.exports = route;
