var ballStack = [];
var blockMatrix = [];
function setup()
{
  createCanvas(1024,768);
  ballStack[0] = new ball(width/2,height-8);
  for(var i=0;i<16;i++){
    blockMatrix[i] = [];
    for(var j=0;j<1;j++){
      var s = random(1);
      if(s>0.3&&s<1){
        blockMatrix[i][j] = new block(i*64,j*64);
      }
    }
  }
}

function draw()
{
  background(255);
  for(var i=0;i<blockMatrix.length;i++)
  {
    for(var j=0;j<blockMatrix[i].length;j++){
      if(blockMatrix[i][j]){

        blockMatrix[i][j].draw();
      }
    }
  }

  if(ballStack[0].direction){
    if(!collider(ballStack,blockMatrix))
    ballStack[0].getDestnation(0,0,width,height);
    ballStack[0].moveTo();
  }
  ballStack[0].draw();
  if(ballStack[0].position.x-ballStack[0].radius<=0){
    ballStack[0].changeDirection("left");
  }else if (ballStack[0].position.x+ballStack[0].radius>=width) {
    ballStack[0].changeDirection("right");
  }else if(ballStack[0].position.y-ballStack[0].radius<=0){
    ballStack[0].changeDirection("up");
  }else if (ballStack[0].position.y+ballStack[0].radius>=height) {
    // ballStack[0].changeDirection("down");
    ballStack[0].stop();
  }


}

function mouseClicked()
{
  if((ballStack[0].position.y+ballStack[0].radius)==height)
  ballStack[0].getDirection(createVector(mouseX,mouseY));
}
