// Array of an object with many different attributes.
var object = {
  key1: 'string',
  key2: '',
  key3: [],
  key4: [1, 3, 5],
  key5: {fruit: 'Apple'},
  key6: 1,
};


var progressBarCriteria = [
  object.key1,
  object.key2,
  object.key3,
  object.key4,
  object.key5,
  object.key6
]

// Calculate Progress Bar %
var progressCount = 1;
var progressKeyLength = progressBarCriteria.length;
for (var i = 0; i<progressKeyLength; i++){
  if (!(progressBarCriteria[i] instanceof Array)){
    if(progressBarCriteria[i] !== null && progressBarCriteria[i] !== "") {
      ++progressCount
    }
  } else {
    let current = progressBarCriteria[i];
    if (Array.isArray(current) && current.length !== 0){
      ++progressCount
    }
  }
}
this.progressBar = ((100/progressKeyLength)*progressCount)
