const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        min: 6,
        max: 25,
        required: true
    },
    email: {
        type: String,
        min: 6,
        required: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);