// Delete from array arr at position index and shift to the left

//Time Complexity is O(n) and Auxillary Space Complexity is O(1)
function deleteFromArray(arr: number[], n: number, index: number): number[] {
  if (index === n - 1) {
    arr[index] = 0;
    return arr;
  }
  for (let i = 0; i < n; i++) {
    if (i >= index && i < n - 1) {
      arr[i] = arr[i + 1];
    }
    if (i === n - 1) {
      arr[i] = 0;
    }
  }
  return arr;
}

//Test Cases

console.log(deleteFromArray([1, 2, 3, 4, 5], 5, 0));
console.log(deleteFromArray([1, 2, 3, 4, 5, 6], 6, 3));
