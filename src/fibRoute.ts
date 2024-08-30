// Endpoint for querying the fibonacci numbers
const fibonacci = require("./fib");

export default (req, res) => {
  const { num } = req.params;
  const parsedNum = parseInt(num);

  // Handle invalid or negative inputs
  if (isNaN(parsedNum) || parsedNum < 0) {
    res.status(400).send(`Error: Invalid input. Fibonacci numbers are defined for non-negative integers.`);
    return;
  }

  const fibN = fibonacci(parsedNum);
  const result = `fibonacci(${parsedNum}) is ${fibN}`;

  res.send(result);
};
