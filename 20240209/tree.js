class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  traversePreOrderHelper(node = this.root) {
    if (!node) return;

    console.log(node.value);

    this.traversePreOrderHelper(node.left);
    this.traversePreOrderHelper(node.right);
  }

  traversePreOrderInterative() {
    const nodeStack = [];
    nodeStack.push(this.root);

    while (nodeStack.length) {
      const node = nodeStack.pop();

      console.log(node.value);

      if (node.right) {
        nodeStack.push(node.right);
      }
      if (node.left) {
        nodeStack.push(node.left);
      }
    }
  }
}

function buildBinaryTree(arr = []) {
  if (!arr?.length) return null;

  const root = new BinaryTreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (!arr[i] !== null) {
      current.left = new BinaryTreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (!arr[i] !== null) {
      current.right = new BinaryTreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const btree = new BinaryTree(buildBinaryTree([42, 41, 50, 10, 40, 45, 75]));

// btree.traversePreOrderInterative();
btree.traversePreOrderHelper();
