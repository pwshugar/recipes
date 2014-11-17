var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(3000);