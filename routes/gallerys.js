'use strict'
var express = require('express');
var galleryscontroller = require('../controllers/gallerycontroller');

var application = express.Router();




application.get('/gallery/list' , galleryscontroller.consultarFotosPorUsuario);


module.exports = application;