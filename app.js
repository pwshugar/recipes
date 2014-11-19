var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use('/views', express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});