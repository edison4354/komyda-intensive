var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/restaurants/new', function (req, res) {
  res.render('restaurants-new', {});
});

app.listen(3000);