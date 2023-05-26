// Higher Order Functions
// that means we can provide functions as the input or arguments to another function
// or as the return value from a function

function cool(fun) {
  fun();
}

cool(() => console.log("kedy"));

// closure
// in a simple sense, function within a function
function outer() {
  const cat = "tekir";
  let petCount = 0;

  // inner function always has access to this state
  // from the outer function at the time it was created
  function inner() {
    petCount = 100;
    return `${cat} was petted ${petCount} times `;
  }

  return inner;
}

const gatto = outer();

console.log(gatto());
