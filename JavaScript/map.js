// Create a new Array[]
// by calling a function on each element in a different Array[]

// It just a loop
// where goal of the loop is to create a new array

const cats = [
  {
    name: "Tekir",
  },
  {
    name: "Cookie",
  },
  {
    name: "Dombili",
  },
];

const catNames = [];

// imperatively
for (const cat of cats) {
  catNames.push(cat.name);
}

// declarative
const catNamesAlternative = cats.map((cat) => cat.name);
