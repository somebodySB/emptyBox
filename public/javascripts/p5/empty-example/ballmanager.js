var ballstack = [];
var myEvent = (function()
{
  var functionList = {},
  listen,
  trigger,
  remove;

  listen = function(key,fn)
  {
    if(!functionList[key]){
      functionList[key] = [];
    }
    functionList[key].push(fn);
  }

  trigger = function()
  {
    var key = Array.prototype.shift.call(arguments),
    fns = functionList[key];
    if(!fns || fns.length === 0){
      return false;
    }
    for(var i=0,fn;fn = fns[i++];){
      fn.apply(this,arguments);
    }
  }

  remove = function(key,fn)
  {
    var fns = functionList[key];
    if(!fns){
      return false;
    }
    if(!fn){
      fns&&(fns.length == 0);
    }else{
      for(var l = fns.length-1;l>=0;l--){
        var _fn = fns[l];
        if(_fn === fn){
          fns.splice(l,1);
        }
      }
    }
  }

  return {
    listen : listen,
    trigger : trigger,
    remove : remove
  }
})();


function onCollider(){

}
