// Move all Zeroes to the end of the array

// Time complexity is O(n+m) which is O(x) and auxillary space complexity is O(m)
function moveZero(arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr2.push(arr[i]);
      arr[i] = 0;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    arr[j] = arr2[j];
  }
  return arr;
}

// Test Cases
const arr1 = [1, 2, 0, 0, 0, 3, 6];
console.log(moveZero(arr1));

const arr2 = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(moveZero(arr2));
