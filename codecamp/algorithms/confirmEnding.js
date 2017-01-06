
function confirmEnding(str, target) {
  a = (str.length);
  b = (str.length - target.length);
  newstr = str.substring(a,b);

  // "Never give up and good luck will find you."
  // -- Falcor
  return  newstr == target;
}

confirmEnding("Bastian", "n");
