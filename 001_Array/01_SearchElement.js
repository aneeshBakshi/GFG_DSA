// Search if element x is present in a given array

// Searching unsorted array.
// Linear Search - O(n)
function searchArray(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return i;
    }
  }
  return -1;
}

// Test Cases
console.log(searchArray([1, 2, 3, 4], 5));
console.log(searchArray([1, 2, 3, 4], 2));
