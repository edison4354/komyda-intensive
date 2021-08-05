// Required Libraries 
require('dotenv').config()
var express = require('express');
var exphbs  = require('express-handlebars');

// App Setup
var app = express();
const PORT = 3000

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

require('./controllers/restaurants')(app);
require('./data/komyda-db');

module.exports = app;

// Start Server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}!`)
})