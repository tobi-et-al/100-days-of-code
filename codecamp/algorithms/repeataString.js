
function repeatStringNumTimes(str, num) {
  // repeat after me
  var me = ''; 
  for(i = 0; i < num ; i++){
    me += str;
  }
  return me;
}

repeatStringNumTimes("abc", 3);