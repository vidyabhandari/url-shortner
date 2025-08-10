const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: {type: String, required: true},
    shortcode: {type: String, required: true, unique: true},
    clicks: {type: Number, default: 0}
},{timestamps: true});

module.exports = mongoose.model('Url', urlSchema);