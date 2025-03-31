// Method 1
/* const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calculator = {
  sum,
  sub,
  mul,
  div,
};

module.exports = calculator; */

// Method 2

module.exports.sum = (a, b) => a + b;
module.exports.sub = (a, b) => a - b;
module.exports.mul = (a, b) => a * b;
module.exports.div = (a, b) => a / b;
