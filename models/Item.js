const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    title: String,
    weight: String,
    color: String,
    place: String
})

module.exports = mongoose.model("Item", itemSchema);