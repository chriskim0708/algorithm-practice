function medianOfArray(array) {
  const length = array.length;

  if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  } else {
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

console.log(medianOfArray([1, 2, 3, 4]));
console.log(medianOfArray([1, 2, 3, 4, 5]));
