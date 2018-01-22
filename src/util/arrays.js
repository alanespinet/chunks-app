// turns an Array into a String with its values separated by commas and spaces,
// so [1, 2, 3] becames "1, 2, 3"
export const arrayToString = (array) => {
  if(!array) return "";
  return (array.toString()).replace(/,/g, ', ');
};

// takes an Array of Objects where every Object has an Array, represented by the second
// parameter (string) and filters them in a way that only those Objects whose Array contains
// at least one element in the third parameter Array:

  // - objectsArray: Array of objects to filter
  // - arrayInObject: String with the name of the array each Object has to have.
  // - arrayForFilter: Array with the comparing values. If one object has in its
  //   arrayInObject at least a value that exists in arrayForFilter, the the Object
  //   is included in the filter
export const filterObjectsSearchingInArrays = (objectsArray, arrayInObject, arrayForFilter) => {
  return objectsArray.filter( (objectElement) => {
    for(singleArrayElement of objectElement[arrayInObject]){
      for(singleFilterElement of arrayForFilter){
        if( singleArrayElement === singleFilterElement ){
          return true;
        }
      }
    }
    return false;
  });
}


// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
