// Program to left rotate array arr by d times

// Time Complexity is O(n)
function leftRotate(arr, d) {
  const arr2 = [];
  const arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < d) {
      arr2.push(arr[i]);
    } else {
      arr3.push(arr[i]);
    }
  }
  const res = arr3.concat(arr2);
  return res;
}

// Test Cases
const arr1 = [1, 2, 3, 4];
console.log(arr1, leftRotate(arr1, 3));
console.log(arr1, leftRotate(arr1, 2));
console.log(arr1, leftRotate(arr1, 1));
