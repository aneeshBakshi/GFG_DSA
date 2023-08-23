// Program to rotate the array to the left by d times

// Time complexity is O(n) and Auxillary Space Complexity is O(1)
function reverse(arr: number[], start: number, end: number) {
  let low = start;
  let high = end;
  let temp;
  while (low < high) {
    temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
  return arr;
}

function rotateArrayByD(arr: number[], d: number) {
  reverse(arr, 0, d - 1);

  reverse(arr, d, arr.length - 1);

  reverse(arr, 0, arr.length - 1);

  return arr;
}

// Test Cases
console.log(rotateArrayByD([1, 2, 3, 4, 5], 2));
