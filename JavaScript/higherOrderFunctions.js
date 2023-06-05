// Function that either TAKE IN functions as parameters or
// RETURN functions

// Since functions are also objects in JavaScript we can pass them to functions

// .map is higher order function

const prices = [1, 10, 2, 3];
// pass a function a map
const updatedPrices = prices.map(function (price) {
  return price * 2;
});
console.log(updatedPrices); // [ 2, 20, 4, 6 ]
