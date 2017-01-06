function findLongestWord(str) {
  var count = 0;
  var longestword;
  str.split(" ").forEach(function(val){
    if(val.length > count){
    	count = val.length;
		longestword = val;
        
    }
  }, count,longestword);
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");