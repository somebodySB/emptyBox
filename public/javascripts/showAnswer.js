

  var firstClassList = [];
  var secondClassList = [];
  var thirdClassList = [];

  for(var i=0;i<score.length;i++){
    switch (score[i]) {
      case 100:
        firstClassList.push(i+1);
        break;
      case 30:
        secondClassList.push(i+1);
        break;
      case 10:
        thirdClassList.push(i+1);
        break;
      default:

    }
  }
  var sumPict = 0;
  var virusNames = [
    "R3综合征",
    "高斯模糊",
    "友抑",
    "灰粉",
    "九号综合征",
    "水晶谎言",
    "冻暄症",
    "无声流感",
    "倦投症",
    "定位症"
  ]
  function selectReport(){
    var report = document.getElementById("report");
    var num = Math.ceil(Math.random()*4);
    report.src="/images/answer/report"+num+".png";
  }
  selectReport();

  var greetings = [
    "早睡早起，多喝热水",
    "注重发量，救救孩子",
    "戒骄戒躁，适度佛系",
    "嗯，没毛病",
    "注意闪退，及时保存"
  ]
  function selectGreeting(){
    var greeting = document.getElementById("greeting");
    greeting.innerHTML = greetings[Math.floor(Math.random()*greetings.length)];
  }
  selectGreeting();
  var myDate = new Date();
  function showTime(){
    var time = document.getElementById("date");

    time.innerHTML=myDate.getFullYear()+"."+(myDate.getMonth()+1)+"."+myDate.getDate();
  }

  showTime();
  for(var i=0;i<firstClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    if(Math.random()*100<=70){
      var img = document.getElementById("virus"+(sumPict+1));
      img.src = "/images/answer/"+firstClassList[i]+".png";

      var virusName = document.getElementById("virusName"+(sumPict+1));
      virusName.innerHTML = virusNames[firstClassList[i]-1];

      var ratio = document.getElementById("ratio"+(sumPict+1));
      ratio.innerHTML = Math.ceil(Math.random()*25+65)+"%";
      sumPict++;
    }

  }
  for(var i=0;i<secondClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    if(Math.random()*100<=30){
      var img = document.getElementById("virus"+(sumPict+1));
      img.src = "/images/answer/"+secondClassList[i]+".png";

      var virusName = document.getElementById("virusName"+(sumPict+1));
      virusName.innerHTML = virusNames[secondClassList[i]-1];

      var ratio = document.getElementById("ratio"+(sumPict+1));
      ratio.innerHTML = Math.ceil(Math.random()*15+40)+"%";
      sumPict++;
    }
  }
  for(var i=0;i<thirdClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    if(Math.random()*100<=10){
      var img = document.getElementById("virus"+(sumPict+1));
      img.src = "/images/answer/"+thirdClassList[i]+".png";

      var virusName = document.getElementById("virusName"+(sumPict+1));
      virusName.innerHTML = virusNames[thirdClassList[i]-1];

      var ratio = document.getElementById("ratio"+(sumPict+1));
      ratio.innerHTML = Math.ceil(Math.random()*25+15)+"%";
      sumPict++;
    }

  }

  for(sumPict;sumPict<3;sumPict++){
    var randomId = Math.ceil(Math.random()*3+7);
    var img = document.getElementById("virus"+(sumPict+1));
    img.src = "/images/answer/"+randomId+".png";

    var virusName = document.getElementById("virusName"+(sumPict+1));
    virusName.innerHTML = virusNames[randomId-1];

    var ratio = document.getElementById("ratio"+(sumPict+1));
    ratio.innerHTML = Math.ceil(Math.random()*25+15)+"%";
  }

  var inviteDate = document.getElementById("inviteDate");
  inviteDate.innerHTML = (myDate.getMonth()+1)+" / "+myDate.getDate()+" - 6 / 10";

  var myCanvas = document.getElementById("myCanvas");
  html2canvas(document.querySelector("#container"),{
    backgroundColor:null,
  }).then(canvas => {

    document.body.appendChild(canvas);
    canvas.style.display = "none";
    var myimg = Canvas2Image.convertToPNG(canvas,canvas.width,canvas.height);
    myimg.style.width = "8.73rem";
    myimg.style.position = "absolute";
    myimg.style.left = ".65rem";
    myimg.style.top = ".93rem";
    document.body.appendChild(myimg);
  });
