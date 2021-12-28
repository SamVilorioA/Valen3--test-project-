const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name: {
        type: String,
        min: 2,
        required: true
    },
    lastname:{
        type: String,
        min: 2,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        min: 10
    },
    email: {
        type: String,
        default: 'N/A' 
    }
});