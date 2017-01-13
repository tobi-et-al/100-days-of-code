/*

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
	var start = str[0].charCodeAt(0);
	var end = str[str.length-1].charCodeAt(0);
	var result;
    for(i = start;i <= end; i++){

		if(str.indexOf(String.fromCharCode(i)) <= -1){
			   result = (String.fromCharCode(i));
        }	
	} 
  str = result;
  return str;
}

fearNotLetter("abce");