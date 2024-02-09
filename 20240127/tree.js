class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert([left, right]) {
    this.left = new BinaryTreeNode(left);
    this.right = new BinaryTreeNode(right);
  }
}

class BinaryTree {
  constructor(root) {
    this._root = root;
  }

  insert([left, right]) {
    this._root.insert([left, right]);
  }

  // DFS
  traversePreOrder() {
    traversePreOrderHelper(this._root);
  }

  traverseInOrder() {
    traverseInOrderHelper(this._root);
  }

  traversePostOrder() {
    traversePostOrderHelper(this._root);
  }

  // BFS
  traverseLevelOrder() {
    const root = this._root;
    const queue = [];

    if (!root) return;

    queue.push(root);

    // queue: [{ value, left, right }]
    // queue: [], temp = { value, left, right }
    // queue: [{ value, left, right }, { value, left, right }]
    // queue: [{ value, left, right }], temp = { value, left, right } (left)
    // queue: [{ value, left, right }, { value, left, right }, { value, left, right }]
    // queue: [{ value, left, right }, { value, left, right }], temp = { value, left, right } (right)

    while (queue.length) {
      const temp = queue.shift();
      console.log(temp.value);

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }
}

function traversePreOrderHelper(node) {
  if (!node) return;
  console.log("node value", node.value);

  traversePreOrderHelper(node.left);
  traversePreOrderHelper(node.right);
}

function traverseInOrderHelper(node) {
  if (!node) return;

  traverseInOrderHelper(node.left);
  console.log("node value", node.value);
  traverseInOrderHelper(node.right);
}

function traversePostOrderHelper(node) {
  if (node.left) {
    traversePostOrderHelper(node.left);
  }
  if (node.right) {
    traversePostOrderHelper(node.right);
  }
  node.value && console.log("node value", node.value);
}

const btree = new BinaryTree(new BinaryTreeNode(42));
btree.insert([41, 50]);
btree._root.left.insert([10, 40]);
btree._root.right.insert([45, 75]);

btree.traversePreOrder();
console.log("--------------------------------");
btree.traverseInOrder();
console.log("--------------------------------");
btree.traversePostOrder();
console.log("--------------------------------");
btree.traverseLevelOrder();

// console.log("btree", JSON.stringify(btree));
