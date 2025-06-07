const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db')

app.set('view engine','ejs')

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const flash = require('connect-flash');
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session'); 
app.use(session({
    secret : "rnw",
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*24 
    }
}))
app.use(passport.initialize());  
app.use(passport.session())  
app.use(passport.setUser); 

app.use(express.urlencoded());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.user = req.user;
  next();
});

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
    
})