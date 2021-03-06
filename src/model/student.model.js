const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid']},
    phoneNumber: {type: Number},
}, {timestamps: true})


module.exports = mongoose.model('Student', schema)
