// Program to find the count of elements smaller than x in array arr

function smallerThanCount(arr: number[], x: number): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) {
      count++;
    }
  }
  return count;
}

// Test Cases
console.log(smallerThanCount([4, 5, 3, 1, 2], 3));
console.log(smallerThanCount([2, 2, 2, 2, 2, 2], 3));
