
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var Mid = collectionCopy[id]; 

   if (Mid.hasOwnProperty(prop) && Mid[prop] !== ''  && value !== ''){
     if(Array.isArray(Mid[prop])){
	 Mid[prop].push(value);
	}else{
     Mid[prop] = value; 
     }
   } 
   else if(Mid.hasOwnProperty(prop)  && Mid[prop] !== '' && value === ''){
      delete Mid[prop];

   }else{
      if (prop === 'tracks' && Mid.hasOwnProperty(prop) === false){
         Mid[prop] =[];
         Mid[prop].push(value);
      }else{
      Mid[prop] = value;
    }
  }
  collectionCopy[id] = Mid;
  var collection = collectionCopy;
  return collection;
  
}


// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

