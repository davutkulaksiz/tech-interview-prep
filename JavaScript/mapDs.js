// creating an empty map
const cats = new Map();

// maps need iterable structures to create
const gattos = new Map([
  ["tekir", "dombili"],
  ["british", "duman"],
]);

console.log(gattos); // Map(2) { 'tekir' => 'dombili', 'british' => 'duman' }

const gatitos = new Map(
  Object.entries({
    tekir: "dombili",
    sarman: "turunç",
  })
);

console.log(gatitos); // Map(2) { 'tekir' => 'dombili', 'sarman' => 'turunç' }

// using set
const kedy = new Map().set("kedi", "davido").set("sarman", "turunç");

console.log(kedy); // Map(2) { 'kedi' => 'davido', 'sarman' => 'turunç' }
console.log(kedy.get("kedi")); // davido
console.log(kedy.has("sarman")); // true


