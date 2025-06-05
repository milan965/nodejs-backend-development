const express = require('express');

const routes = express.Router();

const passport = require('passport');

routes.use('/',require('../routes/authRoute'));
routes.use('/admin/category',require('../routes/categoryRoute'));
routes.use('/admin/product',require('../routes/productRoute'));
routes.use('/user',require('../routes/userRoute'));




module.exports = routes;