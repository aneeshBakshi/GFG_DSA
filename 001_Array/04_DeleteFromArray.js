// Delete element x in dynamic array arr
// Return the array arr with the remaining elements
// If element x doesn't exist then return the array without alteration

function postionOfElementArray(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return arr.length;
}

// Time complexity is O(n)
function deleteFromArray(arr, x) {
  let pos = postionOfElementArray(arr, x);
  if (pos === arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (pos < arr.length) {
      if (i >= pos) {
        arr[i] = arr[i + 1];
      }
    }
    if (i === arr.length - 1) {
      arr.pop();
    }
  }
  return arr;
}

// Test Cases
console.log(deleteFromArray([1, 2, 3, 4], 5));
console.log(deleteFromArray([1, 2, 3, 4], 1));
console.log(deleteFromArray([1, 2, 3, 4], 4));
console.log(deleteFromArray([1, 2, 3, 4], 3));
