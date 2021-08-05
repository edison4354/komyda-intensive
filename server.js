// Required Libraries 
require('dotenv').config()
var express = require('express');
var exphbs  = require('express-handlebars');

// App Setup
var app = express();

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

require('./controllers/restaurants')(app);
require('./data/komyda-db');

module.exports = app;

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}!`)
})