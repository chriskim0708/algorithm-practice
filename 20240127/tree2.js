function solution(plant, k) {
  class TreeNode {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  function arrayToBinaryTree(arr, index) {
    if (index >= arr.length) {
      return null;
    }

    const node = new TreeNode(arr[index]);
    node.left = arrayToBinaryTree(arr, 2 * index + 1);
    node.right = arrayToBinaryTree(arr, 2 * index + 2);

    return node;
  }
}

// Example usage:
const plant = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const k = 5;
const kthElement = solution(plant, k);
