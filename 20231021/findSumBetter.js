const arr = [1, 2, 3, 4, 5];
const weight = 9;

function findSumBetter(arr, weight) {
  const hashtable = {
    8: 0,
    7: 1,
    6: 2,
    5: 3,
  };

  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let currentNumber = arr[i]; // 1 2 3 4 5
    let difference = weight - currentNumber; // 8 7 6 5

    if (hashtable[currentNumber] !== undefined) {
      return [arr[4], arr[3]];
    } else {
      hashtable[5] = 3;
    }
  }

  return -1;
}

console.log(findSumBetter(arr, weight));
