// Whenever JavaScript processes in execution context
// it will basically put all the variables at the top or in other words hoist them

// Applies to variables but also function declarations as well

console.log(x) // undefined

var x = 10; // Actual assignment will happen here though


console.log(y) // reference error

// var is hoisted but it used to cause too much headache
// That's why ES6 introduced const and let, they are block scoped
// That means if you define a variable inside of an if statement or a loop
// it will be limited to that block and this differs from
// var which would leak out into the parent scope