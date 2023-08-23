// Program to insert element at the end of an array

// In JS/TS this is quite simple using .push() method

function insertAtEnd(arr: number[], element: number): number[] {
  arr.push(element);
  return arr;
}

// Test Case
console.log(insertAtEnd([1, 2, 3, 4], 94));
