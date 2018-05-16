var block = function(x,y)
{
  this.x = x;
  this.y = y;
  this.left = x;
  this.up = y;
  this.right = x + 64;
  this.down = y + 64;

  this.draw = function()
  {
    push();
    fill(128);
    rect(this.x,this.y,64,64);
    pop();
  }
}

var collider = function(ballStack,blockMatrix)
{
  for(var i=0;i<ballStack.length;i++){
    var ball_center = createVector(ballStack[i].position.x,ballStack[i].position.y);
    for(var j=0;j<blockMatrix.length;j++)
      for(var k =0;k<blockMatrix[j].length;k++){
        if(blockMatrix[j][k]){

          var block_center = createVector(blockMatrix[j][k].x+32,blockMatrix[j][k].y+32);
          var d = p5.Vector.sub(ball_center,block_center);
          d.x = constrain(d.x,-32-ballStack[i].speed,32+ballStack[i].speed);
          d.y = constrain(d.y,-32-ballStack[i].speed,32+ballStack[i].speed);
          p = p5.Vector.add(block_center,d);
          d = p5.Vector.sub(p,ball_center);
          if(d.mag()<ballStack[i].radius+ballStack[i].speed){
            if(p.x == blockMatrix[j][k].left-ballStack[i].speed){
              ballStack[i].getDestnation(0,0,blockMatrix[j][k].left,height);
              return true;
            }else if (p.x == blockMatrix[j][k].right+ballStack[i].speed) {
              ballStack[i].getDestnation(blockMatrix[j][k].right,0,width,height);
              return true;
            }else if (p.y == blockMatrix[j][k].up-ballStack[i].speed) {
              ballStack[i].getDestnation(0,0,width,blockMatrix[j][k].up);
              return true;
            }else if (p.y == blockMatrix[j][k].down+ballStack[i].speed) {
              ballStack[i].getDestnation(0,blockMatrix[j][k].down,width,height);
              return true;
            }
            if(ballStack[i].position.x-ballStack[i].radius==blockMatrix[j][k].right){
              ballStack[i].changeDirection("left");
              blockMatrix[j][k] = undefined;
            }else if (ballStack[i].position.x+ballStack[i].radius==blockMatrix[j][k].left) {
              ballStack[i].changeDirection("right");
              blockMatrix[j][k] = undefined;
            }else if(ballStack[i].position.y-ballStack[i].radius==blockMatrix[j][k].down){
              ballStack[i].changeDirection("up");
              blockMatrix[j][k] = undefined;
            }else if (ballStack[i].position.y+ballStack[i].radius==blockMatrix[j][k].up) {
              ballStack[i].changeDirection("down");
              blockMatrix[j][k] = undefined;
              // ball.stop();
            }
          }
        }
        }
  }
}
