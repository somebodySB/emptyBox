var position = function(x,y){
  this.left = x;
  this.top = y;
}

var p1 = new position(20,10);
var p2 = new position(200,55);
var p3 = new position(100,80);
var p4 = new position(340,10);
var p5 = new position(380,100);
var p6 = new position(480,10);

var p12p2 = new position(-30,-22.5);
var p22p3 = new position(-13.3,-35);
var p32p4 = new position(-53.3,0);
var p42p5 = new position(-60,-40);
var p52p6 = new position(-76.7,0);

var polygonPos = (function(){
  var n = 1;
  var l = 0;
  this.div = document.getElementById("transl");
  this.present = 0;
  this.last = null;
  this.next = 1;
  this.posArray = [p1,p2,p3,p4,p5,p6];
  this.transArray = [p12p2,p22p3,p32p4,p42p5,p52p6];

  this.isFirst = function(){
    return this.present == 0;
  }
  this.isLast = function(){
    return this.present == (this.posArray.length-1);
  }

  this.getNext = function(){
    if(isLast()){
      return;
    }else{
      last = present;
      present++;
      transDiv(n);
      if(isLast()){
        next == null;
      }else{
        next = present+1;
      }
    }
  }

  this.last = function(){
    if(isFirst()){
      return;
    }else{
      next = present;
      present--;
      transDiv(l);
      if(isFirst()){
        last = null;
      }else{
        last = present-1;
      }
    }
  }

  this.transDiv = function(isN){
    var div = document.getElementById("transl");
    if(isN){

      var middleX = (posArray[present].left+posArray[last].left)/2;
      var middleY = (posArray[present].top+posArray[last].top)/2;
      div.style.transformOrigin = (-posArray[last].left/10)+ "%"+(-posArray[last].top/20)+"%";
    }else{
      var middleX = (posArray[present].left+posArray[next].left)/2;
      var middleY = (posArray[present].top+posArray[next].top)/2;
      // div.style.transformOrigin = (posArray[next].left/6+8.35)+ "%"+(posArray[next].top/2+25)+"%";
    }
    div.style.transformOrigin = "0% 20%";
    div.style.transform = "scale(0.3)";

    setTimeout(function () {
      // div.style.left = "-" + middleX + "%";
      // div.style.top = "-" + middleY + "%";
      div.style.transform = "scale(1) translate3d("+transArray[last].left+"%,"+transArray[last].top+"%,0)";
    }, 450);
  }

  return {
    next:this.getNext,
    last:this.last
  };
})();
