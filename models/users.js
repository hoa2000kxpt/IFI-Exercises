const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: Number
    },

    email: {
        type: String,
        require: [true, 'Please enter your password'],
        unique: true,
        trim: true
    },

    password: {
        type: String,
        require: [true, 'Please enter your password'],
        minlength: [6, 'Password must have 6 characters long']
    },

    username: {
        type: String,
        // require: [true, 'Please enter your username'],
    },

    fullname: {
        type: String,
        // require: [true, 'Please enter your full name'],
    },

    phoneNumber: {
        type: String,
        // require: [true, 'Please enter your phone number'],
    },

    gender: {
        type: String,
        // require: [true, 'Please enter your gender'],
    },

    dob: {
        type: String,
        // require: [true, 'Please enter your date of birth'],
    },

    status: {
        type: String,
        // require: [true, 'Please enter your status'],
    },

    role: {
        type: String,
        // require: [true, 'Please enter your status'],
    },
})

module.exports = mongoose.models.users || mongoose.model('users', UserSchema)