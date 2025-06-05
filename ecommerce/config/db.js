const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/ecommerce`);

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`database connected`);
})

module.exports = db;