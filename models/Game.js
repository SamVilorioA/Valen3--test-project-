const mongoose = require('mongoose');
/*const teamSchema = moongose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    score: {
        type: Number,
        required: true
    }
});*/
const gameSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    mode: {
        type: String,
        min: 5,
        max: 15,        
        required: true
    },
    code: {
        type: String,
        min: 5,
        required: true
    },
    scoreboard: {
        team1: teamSchema,
        team2: {
            name: String,
            score: Number
        }
    }
});

module.exports = mongoose.model('Game', gameSchema);