// Code used for progress bar logic with bootstrap progress bar.
//If field is null or has not been filled out yet, it does not get added to total

// object with many types of attributes
var object = {
  key1: 'string',
  key2: '',
  key3: [],
  key4: [1, 3, 5],
  key5: {fruit: 'Apple'},
  key6: 1,
};

// array of keys only relavent to progress bar
var progressBarCriteria = [
  object.key2,
  object.key3,
  object.key5,
  object.key6
]

// Calculate Progress Bar %

// start progressbar count
var progressCount = 1;
var progressKeyLength = progressBarCriteria.length;

// Loop through each key
for (var i = 0; i<progressKeyLength; i++){
  // Check if its an array
  if (!(progressBarCriteria[i] instanceof Array)){
    // if it is not, check if its empty
    if(progressBarCriteria[i] !== null && progressBarCriteria[i] !== "") {
      // add to count if it is not empty
      ++progressCount
    }
  } else {
    // if its an array, check if if the array is empty
    let current = progressBarCriteria[i];
    if (Array.isArray(current) && current.length !== 0){
      // add to count if not empty
      ++progressCount
    }
  }
}

// Calculate progress bar completion out of 100
this.progressBar = ((100/progressKeyLength)*progressCount)
