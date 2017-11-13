function countWithReducer (index, arr, fn, initial) {
  if(index >= arr.length){
      return initial;
  }

  initial = fn(initial, arr[index], index, arr);
  return countWithReducer(index+1, arr, fn, initial);
}

function reduce(arr, fn, initial) {
  var startIndex = 0;
  return countWithReducer(startIndex, arr, fn, initial);
}

module.exports = reduce;