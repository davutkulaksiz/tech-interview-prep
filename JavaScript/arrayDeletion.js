let cats = ["dombili", "turunç", "cookie", "duman", "beebo"];

// delete with filter
const filteredGattos = cats.filter((cat) => cat !== "duman");
console.log(filteredGattos); // [ 'dombili', 'turunç', 'cookie', 'beebo' ]

// delete with splice
cats.splice(3, 1);
console.log(cats); // [ 'dombili', 'turunç', 'cookie', 'beebo' ]

// remove the first element
cats = ["dombili", "turunç", "cookie", "duman", "beebo"];
const firstGatto = cats.shift();
console.log(cats); // [ 'turunç', 'cookie', 'duman', 'beebo' ]
console.log(firstGatto); // dombili

// remove the last element
cats = ["dombili", "turunç", "cookie", "duman", "beebo"];
const lastGatto = cats.pop();
console.log(cats); // [ 'dombili', 'turunç', 'cookie', 'duman' ]
console.log(lastGatto); // beebo

// remove the second and the third element
// return a new array with these
cats = ["dombili", "turunç", "cookie", "duman", "beebo"];
const newGattos = cats.splice(1, 2);
console.log(cats); // [ 'dombili', 'duman', 'beebo' ]
console.log(newGattos); // [ 'turunç', 'cookie' ]

// remove an element by getting its index
cats = ["dombili", "turunç", "cookie", "duman", "beebo"];
const indexToDelete = cats.indexOf("beebo");
cats.splice(indexToDelete, 1);
console.log(cats); // [ 'dombili', 'turunç', 'cookie', 'duman' ]
