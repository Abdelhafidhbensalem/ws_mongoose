const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, trim: true, required: true },
    price: Number,
    createdOn: { type: Date, default: Date.now },
    available: { type: Boolean, default: true }
})

module.exports = Product = mongoose.model('product', productSchema)