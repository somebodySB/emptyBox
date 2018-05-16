
var ball = function(x,y)
{
  this.radius = 8;
  this.speed = 15,
  this.direction;
  this.position = createVector(x,y);
  this.destnation;

  this.getDirection = function(direction){
    this.speed = 15;
    this.direction = direction.sub(this.position);
    this.direction.normalize();
  }

  this.draw = function(){
    push();
    ellipse(this.position.x,this.position.y,this.radius*2);
    pop();
  }

  this.move = function(){
    this.position.add(p5.Vector.mult(this.direction,this.speed));
  }

  this.moveTo = function(){
    this.direction = p5.Vector.sub(this.destnation,this.position).normalize();
    this.move();
    if(p5.Vector.dist(this.destnation,this.position)<this.speed){
      this.position = this.destnation;
     // this.stop();
    }
  }
  this.getDestnation = function(left,up,right,down){

    var a = this.direction.y;
    var b = -this.direction.x;
    var c = -a * this.position.x - b * this.position.y;

    if(this.direction.x<0 && this.direction.y<0){
      x = left + this.radius;
      y = (-c-a*x)/b;
      if(y<this.radius + up){
        y = this.radius + up;
        x = (-c-b*y)/a;
      }
    }else if (this.direction.x<0 && this.direction.y>0) {
      x = this.radius + left;
      y = (-c-a*x)/b;
      if(y>(down-this.radius)){
        y = down-this.radius;
        x = (-c-b*y)/a;
      }
    }else if (this.direction.x>0 && this.direction.y<0) {
      x = right-this.radius;
      y = (-c-a*x)/b;
      if(y<this.radius + up){
        y = this.radius + up;
        x = (-c-b*y)/a;
      }
    }else {
      x = right-this.radius;
      y = (-c-a*x)/b;
      if(y>down-this.radius){
        y=down-this.radius;
        x = (-c-b*y)/a;
      }
    }
    this.destnation = createVector(x,y);
    return this.destnation;
  }
  this.stop = function(){
    this.direction = undefined;
  }
  this.changeDirection = function(key){
    switch(key){
      case "up":this.direction.y = -this.direction.y;break;
      case "down":this.direction.y = -this.direction.y;break;
      case "left":this.direction.x = -this.direction.x;break;
      case "right":this.direction.x = -this.direction.x;break;
    }
  }
}
