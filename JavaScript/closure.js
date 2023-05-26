// Function that can access values outside of their own curly braces
// in other words, captures the lexical environment

// NO EXTERNAL DATA
// NOT A CLOSURE
// Fully self contained, closed expression
function pureFun(a, b) {
  return a + b;
}

// Function references data outside of its own scope
// This can be global environment or an outer function

// THIS IS A CLOSURE

// In order for the interpreter to call this function and also know the value of these free variables
// it creates a closure to store them in a place in memory (heap)
let b = 3;
function impureFun(a) {
  return a + b;
}

// Closure is a function combined with its outer state or lexical environment
// require more memory and processing power

// self-contained
function outer() {
  let state = "🐈";

  function inner() {
    return `Hello ${state}`;
  }

  return inner;
}

// What is the output?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}

outer(); // logs 3

// What does this code log out?
for (var i = 0; i < 3; i++) {

  // This is not a pure function because it depends on a variable outside of its scope
  // Therefore it is closure
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}

// 3, 3, 3
// var get hoisted to parent scope (in this case to global scope)
