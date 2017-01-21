
function sym(args) {
  var x = [];
  for(i = 0; i < arguments.length; i++){
  x[i] = arguments[i];
  }
  function oj(a,b){
    var result = []; 
    for(i = 0; i < a.length; i++){
   if(b.indexOf(a[i]) <= -1 && result.indexOf(a[i]) <= -1){
    result.push(a[i]);
     }
    } 
    for(i = 0; i < b.length; i++){
   if(a.indexOf(b[i]) <= -1 && result.indexOf(b[i]) <= -1){
    result.push(b[i]);
     }
    }
    return (result); 

  }
  args = x.reduce(function(a, b){
  return oj(a,b);
   });
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
