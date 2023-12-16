import { swap } from "./swap.mjs";

function selectionSort(items) {
  let len = items.length,
    minIndex;

  for (let i = 0; i < len; i++) {
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[minIndex]) {
        minIndex = j;
      }

      if (i != minIndex) {
        swap(items, i, minIndex);
      }
    }
  }

  return items;
}

console.log("selection sort", selectionSort([6, 1, 23, 4, 2, 3]));
