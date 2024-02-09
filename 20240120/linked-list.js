class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
    } else {
      const temp = this.head;
      this.head = new SinglyLinkedListNode(value);
      this.head.next = temp;
    }
    this.size++;
  }

  remove(value) {
    if (this.size === 0) return;

    let currentHead = this.head;

    if (currentHead.data === value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;

      while (currentHead.next) {
        if (currentHead.data === value) {
          // 삭제
          prev = currentHead;
          prev.next = currentHead.next;
          currentHead = currentHead.next;
          break;
        }
        prev = currentHead;
        currentHead = currentHead.next;
      }

      if (currentHead.data === value) {
        prev.next = null;
      }

      this.size--;
    }
  }

  deleteAtHead() {
    let toReturn = null;

    if (this.head !== null) {
      toReturn = this.head.data;
      this.head = this.head.next;
      this.size--;
    }

    return toReturn;
  }

  find(value) {
    let currentHead = this.head;

    while (currentHead) {
      if (currentHead.data === value) {
        return true;
      }
      currentHead = currentHead.next;
    }

    return false;
  }
}

const sll1 = new SinglyLinkedList();

sll1.insert(1);
sll1.insert(12);
sll1.insert(34);

// console.log("head", sll1.head.data);
// console.log("head next", sll1.head.next.data);
// console.log("head next next", sll1.head.next.next.data);
// console.log("head next next next", sll1.head.next.next.next?.data);
// console.log("size", sll1.size);
// sll1.remove(34);
// console.log("size", sll1.size);
// console.log("delete head", sll1.deleteAtHead());
// console.log("head", sll1.head.data);
// console.log("head", sll1.find(1));

function reverseSingleLinkedList(sll) {
  let node = sll.head;
  let prev = null;

  while (node) {
    const temp = node.next;
    node.next = prev;
    prev = node;

    if (!temp) break;

    node = temp;
  }

  return node;
}
console.log("reverseSingleLinkedList", reverseSingleLinkedList(sll1));

function deleteDuplicateUnsortedSll(sll) {
  const track = [];
  let temp = sll.head;
  let prev = null;

  while (temp) {
    if (track.indexOf(temp.data) >= 0) {
      prev.next = temp.next;
      sll.size--;
    } else {
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;
  }

  console.log("track", track);

  return track;
}

sll1.insert(12);
sll1.insert(34);

deleteDuplicateUnsortedSll(sll1);
