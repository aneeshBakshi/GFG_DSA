// Program which returns the max element and min element in array arr

function maxMinArray(arr: number[]): string {
  let max = arr[0];
  let min = arr[0];
  if (arr.length === 1) {
    return `${max} ${max}`;
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return `${max} ${min}`;
}

// Test Cases
console.log(maxMinArray([5, 4, 2, 1]));
console.log(maxMinArray([8]));
