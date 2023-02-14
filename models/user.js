const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    pseudo: {type: String},
    description: {type: String},
    email: {type: String, required: true, unique: true},
    password:{type: String, required: true},
    photo: {type: String},
    pinterest: {type: String},
    facebook: {type: String},
    instagram:{type: String},
    tiktok: {type: String},
    twitter: {type: String}
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);