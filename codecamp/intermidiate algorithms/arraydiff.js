
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr1.forEach(function(val){
    if(arr2.indexOf(val) <= -1){
		newArr.push(val);
	}
  },arr2,newArr);
 
  arr2.forEach(function(val){
     
    if(arr1.indexOf(val) <= -1){
		newArr.push(val);
	}
  },arr1, newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
