// Program to remove duplicates from a sorted array arr

// Time complexity is O(n) and Auxillary Space Complexity is O(1)
function removeDuplicateElements(arr) {
  let res = 1;
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  for (let i = res; i < arr.length; i++) {
    arr[i] = undefined;
  }

  return arr;
}

// Test Cases
console.log(removeDuplicateElements([1, 1, 1, 1, 2, 3, 4, 5, 55]));
console.log(removeDuplicateElements([0, 1, 1, 2, 3, 4, 5, 55]));
console.log(removeDuplicateElements([0, 1, 2, 2, 2, 5, 5, 5]));
