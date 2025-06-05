const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    },
    name: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('product', productSchema);