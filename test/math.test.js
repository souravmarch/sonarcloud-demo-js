const math = require("../src/math");

console.log("Testing add :");
console.log(math.add(1, 2) === 3 ? "PASS" : "FAIL");

console.log("Testing subtract:");
console.log(math.subtract(5, 2) === 3 ? "PASS" : "FAIL"); // ❌ Will fail due to bug
