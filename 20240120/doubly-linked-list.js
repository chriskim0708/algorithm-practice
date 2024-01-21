class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insertAtHead(value) {
    if (this.head === null) {
      this.head = new DoublyLinkedListNode(value);
      this.tail = this.head;
    } else {
      const temp = new DoublyLinkedListNode(value);
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }
    this.size++;
  }

  deleteAtHead() {
    let toReturn = null;

    if (this.head !== null) {
      toReturn = this.head.data;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }

    this.size--;
    return toReturn;
  }

  deleteAtTail() {
    let toReturn = null;

    if (this.tail !== null) {
      toReturn = this.tail.data;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }

    this.size--;

    return toReturn;
  }

  findStartingHead(value) {
    let currentHead = this.head;

    while (currentHead) {
      if (currentHead.data === value) {
        return true;
      }
      currentHead = currentHead.next;
    }

    return false;
  }

  findStartingTail(value) {
    let currentTail = this.tail;

    while (currentTail) {
      if (currentTail.data === value) {
        return true;
      }
      currentTail = currentTail.prev;
    }

    return false;
  }
}

const dll1 = new DoublyLinkedList();
dll1.insertAtHead(10);
dll1.insertAtHead(12);
dll1.insertAtHead(20);
dll1.insertAtHead(34);
dll1.insertAtHead(50);

dll1.deleteAtHead();

console.log(dll1.head.data);

dll1.deleteAtTail();

console.log(dll1.tail.data);

console.log("findStartingHead", dll1.findStartingHead(20));
console.log("findStartingTail", dll1.findStartingTail(20));
