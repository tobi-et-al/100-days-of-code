
function sumAll(arr) {
  var val = 0; 
  	console.log(Math.min.apply(null,arr));
  	console.log(Math.max.apply(null,arr));

  for(var i = Math.min.apply(null,arr);i <= Math.max.apply(null,arr); i++){
 	console.log(i);
    val += i;
  }
  return val;
}

sumAll([1, 4]);