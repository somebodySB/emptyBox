

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
  for(var i=0;i<firstClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    var img = document.getElementById("Img"+(sumPict+1));
    img.src = "/images/"+firstClassList[i]+".png";
    sumPict++;
  }
  for(var i=0;i<secondClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    if(Math.random()*100<=30){
      var img = document.getElementById("Img"+(sumPict+1));
      img.src = "/images/"+secondClassList[i]+".png";
      sumPict++;
    }
  }
  for(var i=0;i<thirdClassList.length;i++){
    if(sumPict>=3){
      break;
    }
    if(Math.random()*100<=10){
      var img = document.getElementById("Img"+(sumPict+1));
      img.src = "/images/"+thirdClassList[i]+".png";
      sumPict++;
    }

  }
  var myCanvas = document.getElementById("mCan");
  html2canvas(document.querySelector("#test")).then(canvas => {
    document.body.appendChild(canvas);
    canvas.style.display = "none";
    var myimg = Canvas2Image.convertToJPEG(canvas,canvas.width,canvas.height);
    myimg.style.width = "100%";
    document.body.appendChild(myimg);
  });
  // Canvas2Image.saveAsJPEG(myCanvas,640,320);
  // document.body.appendChild(myimg);
  // var myCanvas = document.getElementsByTagName("canvas");
  // while(true){
  //   var img = document.createElement("image");
  //   img.src = "./"+
  // }

  // function downImg(){
  //   var myimg = Canvas2Image.convertToJPEG(myCanvas,myCanvas.width,myCanvas.height);
  //   document.body.appendChild(myimg);
  //   myimg.style.width = "100%";
  //   var button = document.getElementById("getImg");
  //   button.style.display = "none";
  // }
