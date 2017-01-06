
function titleCase(str) {
  var result = [];
  str = str.toLowerCase();
  str.toLowerCase().split(" ").forEach(function(val){
    result.push(val.slice(0,1).toUpperCase() + val.slice(1,val.length) );
    
  }, result);
  return result.join(" ");
}

titleCase("I'm a little tea pot");
