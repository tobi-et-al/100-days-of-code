
function rot13(str) { // LBH QVQ VG!
  var mute = [];
  str.split("").forEach( function(val){   

if((/[A-Za-z]+/).test(val)){
   if(( val.charCodeAt(0) - 13) < "A".charCodeAt(0)){ 
	mute.push(String.fromCharCode("Z".charCodeAt(0) - ("A".charCodeAt(0)%(val.charCodeAt(0) - 13))+1));
 	}else{
 		 	mute.push(String.fromCharCode(val.charCodeAt(0) - 13));
    }}else{	
 		mute.push(val);
        }
   }, mute);
   return mute.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
