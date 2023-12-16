import { swap } from "./swap.mjs";

// [6,1,2,3,4,5]
// i = 1
// j = 1
// i = 2
// j = 1, 2
function bubbleSort(array) {
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log("bubble sort", bubbleSort([6, 1, 2, 3, 4, 5]));
