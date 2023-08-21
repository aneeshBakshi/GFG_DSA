// Delete element x from fixed array arr
// If element x exists delete the element and return array
// If x doesn't exists then return the array without alteration

// Space complexity is O(n) and Time complexity is O(n)
function deleteFromFixedArray(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      arr[i] = 0;
    }
  }
  return arr;
}

// Test Cases
console.log(deleteFromFixedArray([1, 2, 3, 4], 5));
console.log(deleteFromFixedArray([1, 2, 3, 4], 2));
console.log(deleteFromFixedArray([1, 2, 3, 4], 4));
console.log(deleteFromFixedArray([1, 2, 3, 4], 1));
