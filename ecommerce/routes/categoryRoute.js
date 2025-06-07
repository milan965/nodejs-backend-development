const express = require('express');

const routes = express.Router();

const { categoryPage, addCategoryPage,addCategory,deleteCategory,editCategory,updateCategory,changeStatus } = require('../controllers/CategoryController');

routes.get('/',categoryPage)
routes.get('/add_category',addCategoryPage)
routes.post('/addcategory',addCategory)
routes.get('/deletecategory',deleteCategory)
routes.get('/editcategory',editCategory)
routes.post('/updatecategory',updateCategory)
routes.get('/changestatus',changeStatus)







module.exports = routes;