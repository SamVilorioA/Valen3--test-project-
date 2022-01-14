const mongoose = require('mongoose');
const leagueSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        required: true
    },
    founder: {
        type: [String],
        required: true
    },
    manager: {
        type: [String] //string de ids o hacer un array con un modelo de un admin?
    },
    foundingDate: {
        type: Date,
        required: true
    },
    phone: {
        type: [String],
        required: true
    },
    colors:{
        type: [String],
        required: true
    },
    location: {
        type: String,
        min: 6,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    members: {
        type: [String]
    },
    guests:{
        type: [String]
    },
    leagueOwner: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('League', leagueSchema);