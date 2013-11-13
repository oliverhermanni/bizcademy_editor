// setup server ===
var express = require('express');
var mongoose = require('mongoose');
var editor = new express();

editor.configure(function() {
    editor.use(express.static(__dirname + "/public"));
    editor.use(express.logger('dev'));
    editor.use(express.bodyParser());
    editor.use(express.methodOverride());
})


// routes ===
editor.get('/api/dashboard', function(req, res){
    var dashboard = [{'title': 'dashboard'}];

    res.json(dashboard);
})

editor.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

editor.listen(8080);
console.log("App listening on port 8080");