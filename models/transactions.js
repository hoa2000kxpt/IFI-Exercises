const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    // transactionID: {
    //     type: Number
    // },

    transactionStatus: {
        type: String,
        // require: [true, 'Please enter your product name'],
    },

    transactionQuantity: {
        type: Number,
        // require: [true, 'Please enter your key number'],
    },

    transactionDate: {
        type: String,
        // require: [true, 'Please enter your username'],
    },


    productID: {
        type: String,
        // require: [true, 'Please enter your full name'],
    }

    
})

module.exports = mongoose.models.transactions || mongoose.model('transactions', TransactionSchema)