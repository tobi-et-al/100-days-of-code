function factorialize(num) {
  var factor = 1;
  for(i = 1; i <= num; i++ ){
     factor = factor * i;
  }
  num = factor;
  return num;
}

factorialize(5);
