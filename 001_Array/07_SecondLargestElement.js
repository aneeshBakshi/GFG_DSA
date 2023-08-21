// Program to find the second largest element in unsorted array arr

// Time Complexity and space complexity are O(n).
function findSecondLargestElement(arr) {
  let max = 0;
  let secondMax = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[max] < arr[i]) {
      secondMax = max;
      max = i;
    }
    if (arr[max] > arr[i]) {
      if (secondMax === -1 || arr[i] > arr[secondMax]) {
        secondMax = i;
      }
    }
  }
  return secondMax;
}

// Test Cases
console.log([2, 44, 56, 5], findSecondLargestElement([2, 44, 56, 5]));
console.log(
  [-10, 0, 3, -50, -4],
  findSecondLargestElement([-10, 0, 3, -50, -4])
);
console.log([1, 1, 2, 0], findSecondLargestElement([1, 1, 2, 0]));
console.log([-1, -4, 0], findSecondLargestElement([-1, -4, 0]));
console.log([0, 0, 0], findSecondLargestElement([0, 0, 0]));
console.log([20, 0, 20], findSecondLargestElement([20, 0, 20]));
