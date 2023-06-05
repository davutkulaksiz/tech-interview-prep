// Introduced in ES6
// Shorter and more concise way to write functions

// we can remove curly braces, if we only return in that function
const prices = [1, 10, 2, 5];
const updatedPrices = prices.map((price) => price * 2);
console.log(updatedPrices); // [ 2, 20, 4, 10 ]

// we can not use arrow functions as object constructors

/*
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.
*/

/*
The main difference between regular and arrow functions is a context (this): regular function changes context (this = parent object)
arrow function don't (this stays the same)
*/
