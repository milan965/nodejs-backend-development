const express = require('express');

const routes = express.Router();

const { userProductPage } = require('../controllers/UserController');

routes.get('/product',userProductPage)


module.exports = routes;