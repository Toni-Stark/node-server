var express = require('express');
var app = express();

app.get('/', function (req, res) {

    res.send('Hello World');

    console.log(req.app);
    console.log(req.baseUrl);
    console.log(req.body);
    console.log(req.fresh);
    console.log(req.hostname);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.query);
    console.log(req.route);
    console.log(req.subdomains);
    console.log(req.accepts());
    console.log(req.app);
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})