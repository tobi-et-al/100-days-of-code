
function largestOfFour(arr) {
  // You can do this!
  var result = [];
  arr.forEach(function(val, index){
	
	var currentVal = 0;
  	for(i = 0; i < val.length; i++){
		currentVal = val[i] > currentVal ? val[i] : currentVal;
	}
 	result[index] = currentVal;

  }, result);
  return result;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
