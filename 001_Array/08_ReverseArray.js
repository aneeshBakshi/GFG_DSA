// Program to reverse an array arr

function reverseArray(arr) {
  let arrLength = arr.length;
  let temp;
  if (arrLength === 0 || arrLength === 1) {
    return arr;
  }
  for (let i = 0; i < parseInt(arrLength / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arrLength - i - 1];
    arr[arrLength - i - 1] = temp;
  }
  return arr;
}

// Test Cases
console.log([], reverseArray([]));
console.log([1], reverseArray([1]));
console.log([2, 3, 4], reverseArray([2, 3, 4]));
console.log([4, 2, 3, 4], reverseArray([4, 2, 3, 4]));
