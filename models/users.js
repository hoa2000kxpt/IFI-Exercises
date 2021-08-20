const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Please enter your password'],
        unique: true,
        trim: true
    },

    password: {
        type: String,
        require: [true, 'Please enter your password'],
        unique: true,
        minlength: [6, 'Password must have 6 characters long']
    }
})

module.exports = mongoose.models.users || mongoose.model('users', UserSchema)