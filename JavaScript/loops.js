const cats = ["tekir", "cookie", "duman", "dombili"];

// traditional for loop
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// for of loop
for (const cat of cats) {
  console.log(cat);
}
// arrays, maps, string are iterable

// forEach, it executes the callback function we gave for each element of the array
cats.forEach((cat) => console.log(cat));

// How do you loop over an object?
// object is not iterable by default
const gattos = { scottish: "duman", stray: "tekir", sarmal: "turunç" };

for (const key in gattos) {
  console.log(gattos[key]);
}

// Object.values will convert all of the values to an array which is iterable
for (const cat of Object.values(gattos)) {
  console.log(cat);
}

// preserves the order of they keys in which they were inserted in
// if you want to maintain a specific order of the key-value pairs in the object
// use Map
const gattitos = new Map(
  Object.entries({
    scottish: "duman",
    stray: "tekir",
    sarmal: "turunç",
  })
);

for (const cat of Object.values(gattitos)) {
  console.log(cat);
}

// Filtering out SUS ones
const amogusCats = ["tekir", "cookie", "Davut", "duman", "dombili"];
const OGCats = amogusCats.filter((cat) => cat !== "Davut"); // creating a new array without human name
console.log(OGCats); // [ 'tekir', 'cookie', 'duman', 'dombili' ]

// map
const copyGattos = amogusCats.map((cat) => "GATTO");
console.log(copyGattos); // [ 'GATTO', 'GATTO', 'GATTO', 'GATTO', 'GATTO' ]

// some
const isThereASussy = amogusCats.some((cat) => cat === "Davut");
if (isThereASussy) {
  console.log("ALERT ALERT");
}
// every has the some logic

// reduce
// [ 'tekir', 'cookie', 'Davut', 'duman', 'dombili' ]
const nonSusCount = amogusCats.reduce((acc, curr) => {
  if (curr !== "Davut") {
    return acc + 1;
  }
  return acc + 0;
}, 0);
console.log(nonSusCount); // 4

// sort
const sorted = amogusCats.sort((a, b) => a < b);
console.log(sorted)
