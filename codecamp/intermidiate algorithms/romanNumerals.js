
function convertToRoman(num) {
    var x = [];
    var c = 0;
    var lookup ={ 1:'I',2:'II',3:'III',4:'IV',5:'V',
                  6:'VI',7:'VII',8:'VIII',9:'IX'
                  ,10:'X',20:'XX',30:'XXX',40:'XL',
                  50:'L',60:'LX',70:'LXX',80:'LXXX',
                  90:'XC',100:'C',200:'CC',300:'CCC',
                  400:'CD',500:'D',600:'DC',700:'DCC',
                  800:'DCCC',900:'CM',1000:'M',2000:'MM',3000:'MMM'};

    [1000,100,10,1].forEach(function(val, i){
        if((num%val) < num){
            var currentVal;
            currentVal = (Math.floor(num/val) * val) - c;
            x.push(lookup[currentVal]);
            c = (Math.floor(num/val) * val); 
         }
    }, num, c, x) ;
    console.log( x.join(""));
    return x.join("");
}
convertToRoman(136); 