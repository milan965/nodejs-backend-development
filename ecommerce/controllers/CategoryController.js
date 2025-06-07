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
const deleteCategory = async(req,res) => {
    try{
        const id = req.query.id
        await Category.findByIdAndDelete(id);
        req.flash('success', 'Category successfully delete');
        return res.redirect('/admin/category');
        
    }catch(err){
        console.log(err);
        return false;
    }
}
const editCategory = async(req,res) => {
    try{
        const id = req.query.id
       let single = await Category.findById(id)
         return res.render('admin/categories/edit_category',{
            single
        });
    }catch(err){
        console.log(err);
        return false;
    }
}
const updateCategory = async(req,res) => {
    try{
        const {editid,category} = req.body;
        let up = await Category.findByIdAndUpdate(editid,{
            category : category
        })
        req.flash('success','category successfully update');
        return res.redirect('/admin/category')
    }catch(err){
        console.log(err);
        return false;
    }
}
const changeStatus = async(req,res)=> {
    try{
        const {id,status} = req.query;
        if(status == "active"){
            await Category.findByIdAndUpdate(id,{
                status : "deactive"
            })
            req.flash('success','category successfully update');
            return res.redirect('/admin/category')
        }else{
             await Category.findByIdAndUpdate(id,{
                status : "active"
            })
            req.flash('success','category successfully update');
            return res.redirect('/admin/category')
        }
        
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    categoryPage,addCategoryPage,addCategory,deleteCategory,editCategory,updateCategory,changeStatus
}