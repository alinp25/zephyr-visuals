var express = require('express'),
	app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(8080, function() {
	console.log("Server is listening on port 8080.");
})