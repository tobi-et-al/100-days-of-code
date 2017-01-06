
function truncateString(str, num) {
  // Clear out that junk in your trunk
    console.log(str.length);
    console.log(num);
 
  if( str.length > num ){
    if(num>3){
    str = str.slice(0, num-3);
      return str + '...';
    }else{
      str = str.slice(0, num);
      return str + '...'; 
   }
  }
  return str;
}
//truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1);