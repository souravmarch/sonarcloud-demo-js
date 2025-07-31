function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a + b; // ❌ Bug: should be a - b
}

function divide(a, b) {
  if (b === 0) {
    console.log("Can't divide by zero"); // ❌ Code smell: improper error handling
    return;
  }
  return a / b;
}

function evalUserInput(input) {
  eval(input); // ❌ Vulnerability: use of eval
}

function unusedFunction() {
  let x = 5; // ❌ Code smell: unused variable
  return true;
}

module.exports = {
  add,
  subtract,
  divide,
  evalUserInput
};
