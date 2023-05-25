// How to create a private variable in JavaScript?

const secretVariable = () => {
  let private = "super secret code";
  return function () {
    return private;
  };
};

let getPrivateVariable = secretVariable();

console.log(getPrivateVariable());


// if we only run secretVariable function we'll only see it returns a function
// we can't see the private variable's value
console.log(secretVariable());
