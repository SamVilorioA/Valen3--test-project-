const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    _personId:{
        type: String
    },
    dorsal:{
        type: Number,
    }
});