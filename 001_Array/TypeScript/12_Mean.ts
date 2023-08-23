// Program to find mean of array

function meanOfArray(arr: number[]): number {
  let mean = 0;
  for (let i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  mean /= arr.length;
  return Math.floor(mean);
}

// Test Cases
console.log(meanOfArray([1, 2, 3, 4]));
console.log(meanOfArray([1, 2, 3, 4, 5]));
