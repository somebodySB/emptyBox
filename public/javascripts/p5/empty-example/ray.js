var ray = function(object)
{
  this.position = object.position;
  this.direction = object.direction;
  this.gap = object.radius;
  this.destnation = undefined;
  this.a = this.direction.y;
  this.b = -this.direction.x;
  this.c = -this.a * this.position.x - this.b * this.position.y;

  this.getDestnation = function(){
    var x,y;
    if(this.direction.x<0 && this.direction.y<0){
      x = this.radius;
      y = (-this.c-this.a*x)/this.b;
      if(y<this.radius){
        y = this.radius;
        x = (-this.c-this.b*y)/this.a;
      }
    }else if (this.direthis.ction.x<0 && this.direthis.ction.y>0) {
      x = this.radius;
      y = (-this.c-this.a*x)/this.b;
      if(y>(this.radius)){
        y = this.radius;
        x = (-this.c-this.b*y)/this.a;
      }
    }else if (this.direthis.ction.x>0 && this.direthis.ction.y<0) {
      x = this.radius;
      y = (-this.c-this.a*x)/this.b;
      if(y<this.radius){
        y = this.radius;
        x = (-this.c-this.b*y)/this.a;
      }
    }else {
      x = this.radius;
      y = (-this.c-this.a*x)/this.b;
      if(y>this.radius){
        y=this.radius;
        x = (-this.c-this.b*y)/this.a;
      }
    }
    this.destnation = createVector(x,y).mult(this.gap);
    return this.destnation;
  }

  this.changeDirection = function(direction){
    this.direction = direction;
    this.getDestnation();
  }

  this.changePosition = function(position){
    this.position = position;
    this.a = this.direction.y;
    this.b = -this.direction.x;
    this.c = -this.a * this.position.x - this.b * this.position.y;
  }
  this.draw = function(){
    push();
    stroke(128,0,0,128);
    strokeWeight(3);
    line(this.position.x,this.position.y,this.destnation.x,this.destnation.y);
    pop();
    push();
    noStroke();
    fill(128,0,0,128);
    ellipse(this.destnation.x,this.destnation.y,this.gap*2);
    pop();
  }

  this.run = function(){
    this.getDestnation();
    this.changeDirection(object.direction);
    this.changePosition(object.position);
    this.draw();
  }
}
