const express = require('express');

const routes = express.Router();

const { productPage, addProductPage } = require('../controllers/ProductController');

routes.get('/',productPage)
routes.get('/add_product',addProductPage)


module.exports = routes;