var myVideo;

function setup(){
  var canvas = createCanvas(750,1138);
  canvas.parent("videoDiv");
  myVideo = createVideo("/images/test-480.mp4");

  var button = createButton("aaa");
  myVideo.hide();
  myVideo.play();
}

function draw(){
  background(128);
  
  // ellipse(10,10,50,50);
}
