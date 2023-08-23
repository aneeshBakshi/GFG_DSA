// Program to calculate the sum of array arr

// Time Complexity is O(n) and Auxillary Space Complexity is O(1)
function sumOfArray(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Test cases
console.log(sumOfArray([1, 2, 3]));
console.log(sumOfArray([1, 2, 3, 4]));
