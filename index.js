var express = require('express');
var app = express();
app.use(express.static('static'));

app.get('/', function(req, res){
   res.render("/static/index");
});

app.listen(3000);
