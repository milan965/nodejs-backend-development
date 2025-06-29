const UserModel = require('../models/UserModel');

const passport = require('passport');

const passportLocal = require('passport-local').Strategy

passport.use(new passportLocal({
    usernameField : 'email'
},async(email,password,done)=>{
    try{
        let user = await UserModel.findOne({email : email});
        if(!user || user.password != password){
            console.log("Email and Password not valid");
            return done(null,false);
        }
        return done(null, user)
    }catch(err){
        return done(null,false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        return done(null, user);
    } catch (err) {
        return done(null, false)
    }
})

passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    return next();
}

//role base authentication
passport.checkRole = (role) => {
    return (req, res, next) => {
        if (!req.isAuthenticated() || req.user.role !== role) {
            console.log("Unauthorised access");
            return res.redirect('/login');
        }
        next();
    };
};


passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user;
    }
    return next();
}


module.exports = passport;