// Program to find immediate greater than element than x in array arr

function immediateGreater(arr: number[], x: number) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      max = arr[i];
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      if (max > arr[i]) {
        max = arr[i];
      }
    }
  }
  return max;
}

// Test Cases
console.log(immediateGreater([1, 2, 3, 45, 5], 3));
