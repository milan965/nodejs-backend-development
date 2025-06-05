const Category = require('../models/CategoryModel');

const categoryPage = async(req,res) => {
    try{
        let categories = await Category.find({});
        return res.render('admin/categories/category',{
            categories
        });
    }catch(err){
        console.log(err);
        return false;
    }
    
}
const addCategoryPage = (req,res) => {
    return res.render('admin/categories/add_category');
}
const addCategory = async(req,res) => {
    try{
        const {category} = req.body;
        const newCategory = new Category({ 
            category: category
        });
        await newCategory.save();
        req.flash('success', 'Category successfully add');
        return res.redirect('/admin/category/add_category')
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    categoryPage,addCategoryPage,addCategory
}