// Function that can access values outside of their own curly braces
// in other words, captures the lexical environment

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

outer();
