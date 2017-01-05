function reverseString(str) {
 	var letters = [];
   for(i = 0; i < str.length ; i++){
        letters.push(str.charAt(i));
   }
	return (letters.reverse().join(''));
}

reverseString("hello");
