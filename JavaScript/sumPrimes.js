// Write a function in JavaScript that takes an array of integers as input 
// and returns the sum of all prime numbers in the array.

const sumPrimes = (arr) => {
  let sum = 0;
  arr.forEach((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return;
      }
    }
    sum += number;
  });
  return sum;
};

console.log(sumPrimes([2, 3, 5, 6]));

