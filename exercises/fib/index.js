// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//input: integer
//output: integer
//fib(1) => 0
//fib(2) => 1
//fib(3) => 1
//sum of the last two numbers
//if n = 3 
//fib(n -1) + fib(n - 2) 


function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result; 
    return result; 
  }
}

function slowFib(n) {
  if (n < 2) {
    return n; 
  }
  return slowFib(n - 1) + slowFib(n - 2); 
}

const fib = memoize(slowFib);

module.exports = fib;
