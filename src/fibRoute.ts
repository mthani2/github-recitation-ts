// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';
import { fibonacci } from './fib';

export default (req: Request, res: Response): void => {
  const numStr = req.params.num;
  const num = parseInt(numStr, 10);

  if (isNaN(num)) {
    res.status(400).send('Invalid number');
    return;
  }

  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};