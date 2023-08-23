// Program to find immediate smaller than value from x in array arr

function immediateSmaller(arr: number[], x: number) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) {
      max = arr[i];
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return max;
}

// Test Cases

console.log(immediateSmaller([4, 67, 13, 12, 15], 16));
console.log(immediateSmaller([1, 2, 3, 4, 5], 1));
