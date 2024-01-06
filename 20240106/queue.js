export function Queue(array = []) {
  // 매개변수에 기본값을 주는 default parameter (array = [])
  if (!Array.isArray(array)) throw "error";
  this.array = array;
}

Queue.prototype.getBuffer = function () {
  return [...this.array];
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Queue.prototype.peek = function () {
  return this.array[0];
};

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

const queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

// console.log(queue1.getBuffer());

queue1.dequeue();
queue1.dequeue();

// console.log(queue1.getBuffer());
