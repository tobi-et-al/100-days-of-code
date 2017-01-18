
 function telephoneCheck(str) {
  // Good luck!

  var val =  (/(\(?(\d{1}?)\)?\s?\(?(\d{3})\)?[\D]?\(?(\d{3}?)\)?[\D]?\(?(\d{4}?)\)?)|\d{10}|\d{3}?[\D]?\d{3}[\D]?\d{4}/g).test(str);
  return val;
}



telephoneCheck("555-555-5555");
