

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.

  var lookup = {"PENNY": 0.01,"NICKEL": 0.05,"DIME":0.10,"QUARTER":0.25,"ONE":1.00,"FIVE": 5.00, "TEN" : 10.00, "TWENTY":20.00,"ONE HUNDRED":100.00};
  change = cash - price;
  holdings = 0;
  cid.forEach(function(a){
 		holdings += a[1];
  }, holdings);
  
if(change ===  holdings) { return "Closed"; }

if(change > holdings) { return "Insufficient Funds"; }

cid.sort(function(a,b){
	return lookup[a[0]] < lookup[b[0]];
},lookup);

var h = [];
cid.forEach(function(a){   

     if(Math.floor(change/lookup[a[0]]) > 0 ){
         if(a[1] < change){
		          h.push([a[0],parseFloat(a[1])]);
				  change = (change - a[1]).toFixed(2);
		 }else{ 
             h.push([a[0],parseFloat((Math.floor(change/lookup[a[0]])*lookup[a[0]]))]);
             change = (change - Math.floor(change/lookup[a[0]])*lookup[a[0]]).toFixed(2);
		 }
	 }
  },cid);
if(change > 0) { return "Insufficient Funds"; }

  change  = h;
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
