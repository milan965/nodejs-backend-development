const UserModel = require('../models/UserModel');

const frontPage = (req,res) => {
    return res.render('index')
}
const loginPage = (req,res) => {
    return res.render('login')
}
const registerPage = (req,res) => {
    return res.render('register')
}

const registeruser = async(req,res) => {
    try{
       
        const {name,email,password}=req.body;
        const adduser = await new UserModel({
            name : name,
            email : email,
            password:password
        }).save();
        console.log("user successfully add");
        return res.redirect('/login')
        
    }catch(err){
        console.log(err);
        return false;
    }
}
const loginuser = (req,res) => {
    
    
    return res.redirect('/dashboard')
}

const dashboardPage = (req,res) => {
    return res.render('admin/dashboard')
}

const logout = (req,res) => {
    req.logout((err)=>{
        if(err){
            console.log(err);
            return false
        }
        console.log(`user logout successfully`);
        return res.redirect('/login');
        
    })
}
module.exports = {
    frontPage,loginPage,registerPage,dashboardPage,registeruser,loginuser,logout
}