var express = require('express');
var bodyParser = require("body-parser");
var youziku =require("youziku");
var youzikuClient = new youziku.youzikuClient("54d2ff5e56a090675039254ec6b1d448"); //apikey
var file = require("fs");
var router = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/main', function(req, res, next) {
    res.render('main', { title: 'Express' });

  });
  app.post('/answer',function(req,res,next){
    var score = [];
    for(var i=0;i<req.body.length;i++){
      score.push(req.body[i]);
    }
    var TestAnswer="访问者 "+req.body.name+" 测试结果为： ";
    for (var i = 0; i < score.length; i++) {
      TestAnswer = TestAnswer + score[i] + " ";
    }
    file.writeFile('./testeeAnswer.txt', TestAnswer+"\n", { 'flag': 'a' }, function(err) {
      if (err) {
          throw err;
      }

      console.log('Saved.');

      // 写入成功后读取测试
      file.readFile('./testeeAnswer.txt', 'utf-8', function(err, data) {
          if (err) {
              throw err;
          }
          console.log(data);
      });
    });
    res.render('answer', { title: '我的病历', score: score, name: req.body.name});
  });



  app.post('/question',function(req,res,next){
    res.render('question',{title:'诊断中……', name: req.body.name});
    text = "早睡早起，多喝热水"+
        "注重发量，救救孩子"+
        "戒骄戒躁，适度佛系"+
        "嗯，没毛病"+
        "注意闪退，及时保存"+
        "0123456789%/-"+
        "江南大学数字媒体学院"+
        "R3综合征"+
        "高斯模糊"+
        "友抑"+
        "灰粉"+
        "九号综合征"+
        "水晶谎言"+
        "冻暄症"+
        "无声流感"+
        "倦投症"+
        "定位症"+
        "你已经足够了解我们你准备好了解自己了吗？"+
        "请输入你的代号"+
        "ok"+
        req.body.name;

    var cdata = {
        Datas: []
    };

    cdata.Datas.push({ AccessKey: 'fc5782dd8f4a4146a160b43787c467f4',
                        Content:    text,
                        Url: 'emptyBox/font/myFont' });
    youzikuClient.createBatchWoffWebFontAsync(cdata, function (result) {
    console.log(result.Code);
    console.log(result.ErrorMessage);
    console.log(text);
  })
    });
  app.get('/answer', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
}

module.exports = router;
