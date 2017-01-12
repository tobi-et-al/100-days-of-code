function whatIsInAName(collection, source) {
  // What's in a name?

  // Only change code below this line
  
    var arr = [];
  collection.forEach(function(val, i){
  var status = true;

 	Object.keys(source).forEach(function(filter){
 			if(source[filter] !== val[filter]) status = false;

	}, val,source,status);
   if(status){
		arr.push(val);
	}
  }, source, arr);
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

