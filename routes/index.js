var express = require('express');
var bodyParser = require("body-parser");
//var multer = require("multer");
var router = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/test', function(req, res, next) {
    res.render('test', { title: 'Express' });
  });
  app.post('/answer',function(req,res,next){
    var score = [];
    for(var i=0;i<req.body.length;i++){
      score.push(req.body[i]);
    }
    res.render('answer', { title: '我的病历', score: score, name: req.body.name});
    console.log(req.body.length);
    console.log(req.body.name);
  });
  app.post('/question',function(req,res,next){
    res.render('question',{title:'诊断中……', name: req.body.name})
  })
}

module.exports = router;
