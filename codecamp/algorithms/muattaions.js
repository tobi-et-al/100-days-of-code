
function mutation(arr) {
  var stringA = arr[0].toLowerCase();
  var state = true;

  stringA = stringA.split("");
  var stringB = arr[1].toLowerCase();
      stringB = stringB.split("");
  stringB.forEach(function(val){
  if (state === true)
    state = (stringA.indexOf(val) > -1);
  }, stringA, state);
    
  return state;
}


mutation(["hello", "hey"]);
