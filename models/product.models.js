const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true,
        default:0
    },

    price:{
        type:Number,
        required:true,
        default:0
    }
});
const Product  = mongoose.model("product",ProductSchema);

module.exports = Product;