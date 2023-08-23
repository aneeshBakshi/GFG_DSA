// Program to reverse array arr

// Time Complexity is O(n) and Auxillary Space Complexity is O(1)
function reverseArray(arr: number[]): number[] {
  let high = arr.length - 1;
  let low = 0;
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

// Test Cases
console.log(reverseArray([1, 2, 3, 4]));
