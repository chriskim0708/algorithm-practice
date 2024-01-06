export function Stack(array = []) {
  if (!Array.isArray(array)) throw "no array";
  this.array = [];
  this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.peek = function () {
  return this.array.at(-1);
};

Stack.prototype.push = function (value) {
  this.array.push(value);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

const stack1 = new Stack();

// console.log(stack1.peek());

// console.log(stack1.getBuffer());

function stackAccessNthTopNode(stack, n) {
  const bufferArray = stack.getBuffer();
  // throw는 함수 종료는 시키는데 무조건 에러를 반환
  if (n <= 0) throw "error";

  const bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }

  return bufferStack.pop();
}

const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);

// console.log("stackAccessNthTopNode", stackAccessNthTopNode(stack2, 2));

function stackSearch(stack, element) {
  const bufferArray = stack.getBuffer();
  const bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) {
      return true;
    }
  }

  return false;
}

// console.log("stackSearch 1", stackSearch(stack2, 1));
// console.log("stackSearch 5", stackSearch(stack2, 5));
