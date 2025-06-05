const express = require('express');

const routes = express.Router();

const { categoryPage, addCategoryPage,addCategory } = require('../controllers/CategoryController');

routes.get('/',categoryPage)
routes.get('/add_category',addCategoryPage)
routes.post('/addcategory',addCategory)



module.exports = routes;