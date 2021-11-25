'use strict'

var express = require('express');
var authcontroller = require('../controllers/authcontroller');
var token = require('../helpers/token');

var application = express.Router();

application.post('/usuario/login', authcontroller.validarPasswordDeUsuario);

module.exports = application;