function Stack(array = []) {
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

stack1.push(() => {
  console.log("stack1");
});
stack1.push(() => {
  console.log("stack2");
});

// console.log(stack1.peek());

stack1.pop()();
stack1.pop()();

console.log(stack1.getBuffer());
