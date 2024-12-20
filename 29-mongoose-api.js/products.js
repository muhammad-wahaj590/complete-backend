// yahan pe models or schemas banen ge 
const mongoose = require('mongoose')

// create schema for products 
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

// create model for products
module.exports = mongoose.model('products', productSchema)