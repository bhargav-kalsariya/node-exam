const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

exports.userSchema = mongoose.model('User', userSchema);