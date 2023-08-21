// Program to check if array arr is sorted in ascending order

function checkIfArrayIsSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log([1, 2, 3, 4], checkIfArrayIsSorted([1, 2, 3, 4]));
console.log([4, 1, 2, 3], checkIfArrayIsSorted([4, 1, 2, 3]));
console.log([4, 3, 2, 1], checkIfArrayIsSorted([4, 3, 2, 1]));
console.log([1, 2, 4, 3], checkIfArrayIsSorted([1, 2, 4, 3]));
