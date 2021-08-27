const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transactionQuantityID: {
        type: Number
    },

    transactionStatus: {
        type: String,
        // require: [true, 'Please enter your product name'],
    },

    transactionQuantity: {
        type: Number,
        // require: [true, 'Please enter your key number'],
    },

    transactionDate: {
        type: Date,
        // require: [true, 'Please enter your username'],
    },

    description: {
        type: String,
        // require: [true, 'Please enter your full name'],
    },

    productID: {
        type: Number,
        // require: [true, 'Please enter your full name'],
    }

    
})

module.exports = mongoose.models.products || mongoose.model('products', ProductSchema)