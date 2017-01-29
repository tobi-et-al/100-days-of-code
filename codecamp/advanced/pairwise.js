
function pairwise(arr, arg) { 
  var temp = arr;
  var x = {};
  var mapp = [];
  var t = 0;
  temp.forEach(function(v,i){
	  	temp.forEach(function(w,j){
			if(i !== j && (v + w) === arg){
				console.log(t, v, w);
 				x[t] = v;
			  	t += 1;
 				x[t] = w;
			  	t += 1;

			}
			
  		}, arr);
  }, arr);

  for(y in x){
      
	console.log(x)
		
  }

  console.log(x)
 
  //x.map(function(a, i){
  	//mapp[i] = a;
  //})
  //console.log(mapp)

  return arg;
}