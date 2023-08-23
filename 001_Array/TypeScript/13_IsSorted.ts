// Program to check if array is sorted

// Time Complexity is O(n) and Auxillary Space Complexity is O(1)
function isSorted(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return 0;
    }
  }
  return 1;
}

// Test Cases

console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([4, 1, 2, 3, 4]));
