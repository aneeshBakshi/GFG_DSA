// Program to remove duplicates from a sorted array arr

// Time complexity is O(n)
function removeDuplicateElements(arr) {
  let j = 0;
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const arr2 = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr2[j] !== arr[i]) {
      arr2.push(arr[i]);
      j++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr2[i];
  }
  return arr;
}

// Test Cases
console.log(removeDuplicateElements([1, 1, 1, 1, 2, 3, 4, 5, 55]));
console.log(removeDuplicateElements([0, 1, 1, 2, 3, 4, 5, 55]));
console.log(removeDuplicateElements([0, 1, 2, 2, 2, 5, 5, 5]));
