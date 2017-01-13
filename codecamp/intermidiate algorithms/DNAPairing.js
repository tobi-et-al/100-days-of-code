/*

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

*/

function pairElement(str) {
  var pairs =  {G:"C",A:"T",C:"G",T:"A"};
  var DNA = [];
  str.split("").forEach(function(val){
    DNA.push([val, pairs[val]]);
  });
   return DNA;
}

pairElement("GCG");
