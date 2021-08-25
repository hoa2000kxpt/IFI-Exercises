const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number
    },

    name: {
        type: String,
        // require: [true, 'Please enter your product name'],
    },

    keyNo: {
        type: Number,
        // require: [true, 'Please enter your key number'],
    },

    price: {
        type: Number,
        // require: [true, 'Please enter your username'],
    },

    description: {
        type: String,
        // require: [true, 'Please enter your full name'],
    },

    image: {
        type: String,
        // require: [true, 'Please enter your phone number'],
    }
})

module.exports = mongoose.models.products || mongoose.model('products', ProductSchema)