var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/hello', function(req, res){
   // res.render("/static/test");
});

app.listen(process.env.PORT || 5000);
