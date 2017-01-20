
 function telephoneCheck(str) {
  // Good luck!
 // str = str.replace(/\D/g, '');
  var val =  (/^(\((1)?\s?\)|(1)?\s?)[ -]?(\([1-9]{3}\)|[1-9]{3})[ -]?\d{3}[ -]?\d{4}$/g).test(str);
  return val;
}



telephoneCheck("555-555-5555");
