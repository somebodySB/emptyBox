var questionList = [];
var score = [];
var testeeName;

var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
var count = 0;


function nextQusetion(){
  setTimeout(function () {
    swiper_questionnaire.slideNext();
  }, 200);

}

function submitQuestion(){
  for(var i=0;i<questionList.length;i++){
    var element = questionList[i].elements;
    for(var j=0;j<element.length;j++){
      if(element[j].type == "radio"){
        if(element[j].checked == true){
          score.push(element[j].value);
        }
      }
    }
  }
  post("/answer",score);
}

function post(url,args){
  var myForm = document.createElement("form");
  myForm.method = "POST";
  myForm.action = url;
  for(var i in args){
    var myInput = document.createElement("input");
    myInput.setAttribute("name",i);
    myInput.setAttribute("value",args[i]);
    myForm.appendChild(myInput);
  }

  var myInput2 = document.createElement("input");
  myInput2.setAttribute("name","name");
  myInput2.setAttribute("value",testeeName);
  myForm.appendChild(myInput2);


  var Input = document.createElement("input");
  Input.setAttribute("name","length");
  Input.setAttribute("value",args.length);
  myForm.appendChild(Input);


  document.body.appendChild(myForm);
  myForm.submit();
  document.body.removeChild(myForm);
}

function shakeStart(){
  window.addEventListener("devicemotion", motionHandler, false);
}

function motionHandler(event){

  var acceleration = event.accelerationIncludingGravity;
  var curTime = new Date().getTime();
  var diffTime = curTime - last_update;
  if(diffTime>100){
    // alert("aaa");
    last_update = curTime;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    var speed = Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000;
    // alert();
    if(speed>SHAKE_THRESHOLD){
      count++;
       // alert(count);
      if(count>10)
      {
        submitQuestion();
        count=0;
      }
    }
    last_x = x;
    last_y = y;
    last_z = z;
  }
}


// var rotate_alpha=0;
// var rotate_beta=0;
// var rotate_gamma=0;
// var dv_a,dv_b,dv_g;
//
//
//
//
//
// function orientationHandler(event) {
//
//     dv_a = Math.abs(rotate_alpha - Math.round(event.alpha));
//     dv_b = Math.abs(rotate_beta - Math.round(event.beta));
//     dv_g = Math.abs(rotate_gamma - Math.round(event.gamma));
//     rotate_alpha = Math.round(event.alpha);
//     rotate_beta = Math.round(event.beta);
//     rotate_gamma = Math.round(event.gamma);
//     if(dv_a+dv_b+dv_g>=5){
//       alert("手机动了");
//     }
// }
