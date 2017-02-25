var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
    secret: 'To4W3Vl6jvv4TE0_n9fdEp7kePVWWyrDST1eCJjCFsPccKNLEuwJQRAi5bIioHm8',
    audience: 'juSb0mUIFtFQIrs5nVslyGeucnvOJknC'
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/secure', jwtCheck);

app.get('/', function (req, res) {
    res.send('Open endpoint');
});

app.get('/secure', function (req, res){
    res.send('Secure endpoint');
})

var port = process.env.PORT || 1337;
var server = app.listen(port, function () {
    var port = server.address().port;

    console.log("Example app listening at http://127.0.0.1:%s", port);
});