import mongoose = require('mongoose');

let Schema = mongoose.Schema;

let categorySchema = new Schema({
    code: Number,
    name: String,
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;