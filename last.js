/**
 * Created by 401923 on 6/27/2014.
 */


var fs=require('fs');
var express=require('express');
var app=express();


app.get('/hello', function(req,res) {

    var data = fs.readFile('./profile.json', function (err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.write(data);
        res.send("Welcome");

    });
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

var server = app.listen(8698, function() {
console.log('Listening on port %d', server.address().port);
});
