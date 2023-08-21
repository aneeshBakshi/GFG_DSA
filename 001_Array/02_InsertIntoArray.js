// Program to insert value x in position pos in array arr
// Time complexity is O(n) and space complexity is O(n).
function insertIntoArray(arr, x, pos) {
  const res = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i < pos) {
      res[i] = arr[i];
    } else if (pos === i) {
      res[pos] = x;
    } else {
      res.push(arr[i - 1]);
    }
  }
  return res;
}

// Test Cases
console.log(insertIntoArray([1, 2, 3], 0, 0));
console.log(insertIntoArray([1, 2, 3], 4, 1));
console.log(insertIntoArray([1, 2, 3], 5, 3));
