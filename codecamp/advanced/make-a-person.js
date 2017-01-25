

var Person = function(firstAndLast) {
    var FullName = firstAndLast;
	var FirstName = FullName.split(" ")[0];
	var LastName =  FullName.split(" ")[1];
    
    this.getFirstName = function(){
			 	return FirstName;
	};    
    this.getLastName = function(){
			 	return LastName;
	};    
    this.getFullName = function(){
			 	return FirstName + ' ' +  LastName;
	};    
    this.setFirstName = function(v){
				FirstName = v; 
	};    
    this.setLastName = function(v){
				LastName = v; 
	};    
    this.setFullName = function(v){

				FullName = v; 
                FirstName = FullName.split(" ")[0];
                LastName = FullName.split(" ")[1];
	};
};


var bob = new Person('Bob Ross');
bob.getFullName();