// It's a keyword that references another value
// usually an object that represents the current execution context
/* this = current execution context */

// it either refers to global environment like the browser (window) or Node.js (global)
// when used inside a function it references the object calling that function

/*
PS C:\Users\davut\OneDrive\Belgeler\GitHub\tech-interview-prep\JavaScript> node
Welcome to Node.js v18.12.0.
Type ".help" for more information.
> console.log(this)
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  .
  .
  .
*/

function whodis() {
  console.log(this);
}

whodis(); // <ref *1> Object [global] {

const jeff = {
  face: "😃",
  whodis,
};

jeff.whodis(); // { face: '😃', whodis: [Function: whodis] }

// if the function and the object are defined seperately
const karma = {
  face: "😡",
};

// bind:
// make a new function where this is explicit

// the result is a new function where any references to this inside the function will point to the object
// that you pass as the argument here
const disKarma = whodis.bind(karma);
disKarma(); // { face: '😡' }

// it is mostly used in constructor functions using the new keyword

function Cat(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Meowwww, this is ${this.name}!`);
  };
}

// new: create objects where 'this' is the new object
const gatto = new Cat("Karma");
gatto.sayHello(); // Meowwww, this is Karma!

// 1 - IT WORKS DIFFERENT IN STRICT MODE
// in strict mode if you call a function in the global context
// this will be undefined, instead of returning Window or Global
function thisIsFun() {
  console.log(this); // undefined
}
thisIsFun();

// 2 - ARROW FUNCTIONS

const angryKarma = {
  face: "😡",
  whodis: function () {
    // { face: '😡', whodis: [Function: whodis] }
    console.log(this);
  },
  butWhoAmI: () => console.log(this), // global object or undefined (in strict mode)
};

angryKarma.whodis();
angryKarma.butWhoAmI();

// One of the big motivations of React to use functional components over class-based
// components was so that developers wouldn't have to use 'this' in their code
// because it gets even more complicated when you have a big framework with
// a bunch of dependencies and components

// Functional
const Fun = (props) => {
  <div>
    <h1>Hello, {props.name} </h1>
  </div>;
};

// OOP
class Classic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: true,
    };
  }
}
