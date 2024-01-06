import { Stack } from "../20231216/stack.js";

function isParenthesisValid(validationString) {
  const stack = new Stack();
  for (let currentChar of validationString) {
    if (currentChar === "(") {
      stack.push(currentChar);
    }
    if (currentChar === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log("((()))", isParenthesisValid("((()))"));
console.log("((())))", isParenthesisValid("((())))"));
console.log("(((()))", isParenthesisValid("(((()))"));
