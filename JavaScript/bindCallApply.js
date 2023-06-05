// Three prototype methods that live on a function object
// bind, call, apply

function showFace() {
  return this.face; // this => in this the global context
}

const karma = {
  face: "😡",
};

const showKarmasFace = showFace.bind(karma);
console.log(showKarmasFace()); // 😡
// SO, bind gives you a way to explicitly set this on a function

// in other cases, you can call a function with a diffrent this context
// but not create a whole new function and for that
// you can use call or apply
console.log(showFace.call(karma)); // 😡

// you can call the function with the context and arguments like below
// showFace.call(karma, arg1, arg2, arg3)

// APPLY method is identical to call, the only difference is
// the second is an array of arguments
// showFace.call(karma, [arg1, arg2, arg3])