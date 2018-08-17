"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// Create Express server
var app = express();
// Set up database conection
var mongoDB = 'mongodb://127.0.0.1:27017/cataluz';
mongoose.connect(mongoDB);
var db = mongoose.connection;
// Models
var Schema = mongoose.Schema;
var categorySchema = new Schema({
    code: Number,
    name: String,
});
var Category = mongoose.model('Category', categorySchema);
// Middleware
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
//Ejemplo: GET http://localhost:8080/categories
app.get('/categories', function (req, res, next) {
    // res.send('Get categories');
    Category.find({}, function (err, categories) {
        res.send(categories);
    });
});
//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Express configuration
app.set("port", process.env.PORT || 3000);
exports.default = app;
