// array creation
let cats = ["tekir", "duman", "gatto", "turunç"];

// access an element by index
console.log(cats[3]); // turunç

// modify an element
cats[1] = "dombili";
console.log(cats); // [ 'tekir', 'dombili', 'gatto', 'turunç' ]

// iterate over an array
for (const cat of cats) {
  console.log(cat);
}

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

cats.forEach((cat) => console.log(cat));
cats.forEach(console.log);

// add element an to the end of the array
cats.push("gatito");
console.log(cats); // [ 'tekir', 'dombili', 'gatto', 'turunç', 'gatito' ]
cats = [...cats, "şüşko"];
console.log(cats); // [ 'tekir', 'dombili', 'gatto', 'turunç', 'gatito', 'şüşko' ]

// remove the last element from the array
const lastCat = cats.pop();
console.log(lastCat); // şüşko
console.log(cats); // [ 'tekir', 'dombili', 'gatto', 'turunç', 'gatito' ]

// add element an to the start of the array
cats.unshift("osman");
console.log(cats); // [ 'osman', 'tekir', 'dombili', 'gatto', 'turunç', 'gatito' ]
cats = ["davido", ...cats];
console.log(cats); // [ 'davido', 'osman', 'tekir', 'dombili', 'gatto', 'turunç', 'gatito' ]
