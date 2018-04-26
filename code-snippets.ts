//Code samples used in AngularCLI version(4.4.6) project with Django backend.

// Code used with bootstrap progress bar.
//If field is null or has not been filled out yet, it does not get added to total
// object with many types of attributes
var object = {
  key1: [{key1a: 'abc'}, {key1a: 'xyz'}, {key1a: 'lmn'}],
  key2: '',
  key3: [],
  key4: [1, 3, 5],
  key5: {fruit: 'Apple'},
  key6: 1,
  key7: 'string'
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



// Code for updating checkboxes on a form
// function passes a click event as well as a piece of data 'fundingResult'
updateCheckbox(event, data) {
  // checks if the element that was clicked on is checked
  if(event.srcElement.checked) {
    // if it is, then push the data object into the array
    this.object.key1.push({key1a: data});
  } else {
    // if not checked or unchecked, loops array to find match with the data being sent
    for (var k = 0; k < this.object.key1.length; k++) {
      if (this.object.key1[k].key1a === data){
        // if there is a match, remove that index
        this.object.key1.splice(k, 1);
      }
    }
  }
}
// function to check if box should be checked on load
hasCheck(data) {
   for(var iterator of this.object.key1) {
     if (iterator.key1a == data) {
       return true;
     }
   }
  return false;
}



// Get request to external API
getDataList() {
  return this.http.get(this.dataUrl).map(
    (res: Response) => {
        return res.json()
    }
  )
}


//Simple search service used for hitting external API to generate live list of dropdown responses
// terms matched what user was typing in html form
searchStack(terms: Observable<string>) {
  // refreshes search every 4 milliseconds
  return terms.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term => this.searchStackEntries(term));
}

searchStackEntries(term) {
  return this.http
      .get(this.stackUrl + this.queryUrl + term)
      .map(res => res.json());
}



// Created simple pipe service in Angular to reformat date fields for client view
//"date": "2018-04",
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateFormat'
})
export class DateFormat implements PipeTransform {
  transform(value: string): string {
    return value.split('-').reverse().join('/');
  }
}
