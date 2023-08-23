// Program to insert element at position pos in array arr

// Time Complexity of the solution is O(n) and Auxillary Space Complexity is O(1).
function insertIntoArray(
  arr: number[],
  element: number,
  pos: number
): number[] {
  let prev: number = arr[pos];
  let curr: number;
  let length = arr.length;
  if (pos > length) {
    return arr;
  }
  for (let i = 0; i <= length; i++) {
    if (i === pos) {
      prev = arr[i];
      arr[i] = element;
    }
    if (i > pos) {
      curr = arr[i];
      arr[i] = prev;
      prev = curr;
    }
    if (i === arr.length) {
      arr.push(prev);
    }
  }
  return arr;
}

// Test Cases

console.log(insertIntoArray([1, 2, 4, 5], 3, 0));
