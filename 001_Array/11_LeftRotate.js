// Program to left rotate array arr by d times

// Time Complexity is O(n)
// function leftRotate(arr, d) {
//   const arr2 = [];
//   const arr3 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i < d) {
//       arr2.push(arr[i]);
//     } else {
//       arr3.push(arr[i]);
//     }
//   }
//   const res = arr3.concat(arr2);
//   return res;
// }

// Optimised solution
// Time Complexity is O(n) and Auxillary space complexity is O(1)
function reverseArr(arr, start, end) {
  let high = end;
  let low = start;
  let temp;
  while (low < high) {
    temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
  // console.log(arr);
  return arr;
}

function leftRotate(arr, d) {
  reverseArr(arr, 0, d - 1);
  // console.log(arr);
  reverseArr(arr, d, arr.length - 1);
  // console.log(arr);
  reverseArr(arr, 0, arr.length - 1);
  // console.log(arr);
  return arr;
}

// Test Cases
const arr1 = [1, 2, 3, 4];
let d = 2;
console.log(`Left Rotate of ${arr1} by ${d} is: `);
console.log(leftRotate(arr1, d));
