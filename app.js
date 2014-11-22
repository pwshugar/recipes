var _ = require('underscore')
var mongo = require('mongodb');
var db = require('monk')('mongodb://peter:Heat33ee@dogen.mongohq.com:10090/app31707692');

var express = require('express');
var app = express();


var recipeDB = db.get('recipes');


// var recipe = recipeDB.findById("54711663458a5384ed12b9c4", function(err, data){
// 	console.log(err, data)
//   recipeDB.remove(data, function(err, data){
//     console.log("data",data)
//   })
// });




app.set('views', __dirname + '/views');
app.use('/views', express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/data/recipes', function(req, res){
	recipeDB.find({}, function(err, recipes){
		var obj = {};
		recipes.forEach(function(rec){
			obj[rec.name] = rec;
		})
		res.send(obj);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});