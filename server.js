var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
    secret: 'To4W3Vl6jvv4TE0_n9fdEp7kePVWWyrDST1eCJjCFsPccKNLEuwJQRAi5bIioHm8',
    audience: 'juSb0mUIFtFQIrs5nVslyGeucnvOJknC'
});

app.use('/secure', jwtCheck);

app.get('/', function (req, res) {
    res.send('Open endpoint');
});

app.get('/secure', function (req, res){
    res.send('Secure endpoint');
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});