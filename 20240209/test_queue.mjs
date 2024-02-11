import { Queue } from "./queue.mjs";

let queue = new Queue();

console.log("============ enqueue() 세번 호출 =========");

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
