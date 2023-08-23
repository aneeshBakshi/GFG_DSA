// Program to check which element has majority between x and y in array arr

function findMajority(arr: number[], x: number, y: number) {
  let xCount = 0;
  let yCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      xCount++;
    }
    if (arr[i] === y) {
      yCount++;
    }
  }
  if (xCount > yCount) {
    return x;
  }
  if (xCount < yCount) {
    return y;
  }
  return x < y ? x : y;
}

// Test Cases
console.log(findMajority([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], 4, 5));
console.log(findMajority([1, 2, 3, 4, 5, 6, 7, 8], 1, 7));
