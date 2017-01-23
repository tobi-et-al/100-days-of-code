

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var end = {'pt1':[], 'pt2': []};
	arr1.forEach(function(a){
     	end.pt1.push(a[0]);
     	end.pt2.push(a[1]);
	});	  

    arr2.forEach(function(a, i){
           if(end.pt2.indexOf(a[1]) > -1){
			
				for(x = 0; x < end.pt2.length ;x++){
					if(end.pt2[x] === a[1]){ 
						arr1[x][0] = parseInt(arr1[x][0]) + parseInt(a[0])	;
					};
				}
 				

    	   }else{ 
			 arr1.push([a[0],a[1]]);
		   }
	});	
	arr1.sort(function(a,b){ 
		if(a[1].toLowerCase() > b[1].toLowerCase()){
		 	return true;
		}
	});
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])