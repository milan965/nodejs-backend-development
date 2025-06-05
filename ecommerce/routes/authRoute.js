const express = require('express');

const routes = express.Router();

const passport = require('passport');

const { frontPage,loginPage ,registerPage,dashboardPage, registeruser,loginuser,logout} = require('../controllers/Authontroller');

routes.get('/',frontPage);
routes.get('/login',loginPage);
routes.get('/register',registerPage);
routes.post('/registeruser',registeruser);
routes.post('/loginuser',passport.authenticate('local',{failureRedirect : '/login'}),loginuser)

routes.get('/dashboard',passport.checkUser,dashboardPage);


routes.get('/logout',logout);



module.exports = routes;