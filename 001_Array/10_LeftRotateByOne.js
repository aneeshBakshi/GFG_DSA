// Left Rotate array by One

// Time Complexity is O(n)
function leftRotateArrayByOne(arr) {
  let curr;
  let prev = arr[0];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    curr = arr[n - i - 1];
    arr[n - i - 1] = prev;
    prev = curr;
  }
  return arr;
}

// Test Cases
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 6, 7, 1];
const arr3 = [0, 1, 44, 5, 7];
console.log(`Result of left rotating ${arr1} by one is :`);
console.log(leftRotateArrayByOne(arr1));
console.log(`Result of left rotating ${arr2} by one is :`);
console.log(leftRotateArrayByOne(arr2));
console.log(`Result of left rotating ${arr3} by one is :`);
console.log(leftRotateArrayByOne(arr3));
