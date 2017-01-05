function palindrome(str) {
  // Good luck!
  str = str.replace(/(\W+)/g, "");
  str = (str.toLowerCase());

   var letters = [];
   for(i = 0; i < str.length ; i++){
        letters.push(str.charAt(i));
   }
	b4 = str;
	a6 = letters.reverse().join("");
  return (a6 == b4);
}
