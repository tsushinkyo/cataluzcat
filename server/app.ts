import express = require('express');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
// Create Express server
const app = express();

// Set up database conection
let mongoDB = 'mongodb://127.0.0.1:27017/cataluz'
mongoose.connect(mongoDB);
let db = mongoose.connection;


// Models

let Schema = mongoose.Schema;

let categorySchema = new Schema({
    code: Number,
    name: String,
});

let Category = mongoose.model('Category', categorySchema);


// Middleware

app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados


//Ejemplo: GET http://localhost:8080/items
app.get('/categories', function(req, res, next) {
    res.send('Get categories');
    Category.find({}, function (err, categories) {
        res.send(categories); 
    });
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Express configuration
app.set("port", process.env.PORT || 3000);

export default app;