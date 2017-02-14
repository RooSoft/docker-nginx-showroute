var express = require('express');
var dateFormat = require('dateformat');
var ip = require('ip');
var app = express();

app.use(function (req, res, next) {
    message = `${ip.address()} Time: ${dateFormat(Date.now())}, URL: ${req.originalUrl}\n`;
    console.log(message);
    res.send(message);
});

app.listen(80, function () {
    console.log('Ready to show routes')
});

