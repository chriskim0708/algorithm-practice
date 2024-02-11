class SinglyStackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(data) {
    let newNode = new SinglyStackNode(data);

    if (this.count === 0) {
      this.head = newNode;
      this.count++;
    } else {
      let currentNode = this.head;
      newNode.next = currentNode;
      this.head = newNode;
      this.count++;
    }
  }

  pop() {
    let currentNode = this.head;
    this.head = currentNode.next;
    return currentNode.data;
  }

  peek(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Stack };
