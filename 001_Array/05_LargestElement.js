// Program to find the largest element in an unsorted array of numbers arr

// Time complexity is  O(n)
function findLargestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// Test Cases
console.log([1, 2, 3, 4], findLargestElement([1, 2, 3, 4]));
console.log([55, 2, 3, 4, 5], findLargestElement([55, 2, 3, 4, 5]));
console.log([-10, 3, 20, 0], findLargestElement([-10, 3, 20, 0]));
console.log([30, 90, 2, 3], findLargestElement([30, 90, 2, 3]));
