function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val){
    if(val !== false){ return val;}
  });

  return arr;
}

bouncer([7, "ate", "", false, 9]);
