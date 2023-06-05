var arr = ["a", "b", "c", "d"];

// ES5
// add to the end of the array
arr.push("end");
// add to the start of the array
arr.unshift("start");

console.log(arr);

// ES6
let arrES6 = ["a", "b", "c", "d"];
// spread operator
arrES6 = ["start", ...arrES6, "end"];

console.log(arrES6);

// add to a specific index
let cats = ["beebo", "cookie", "tekir", "turunç"];
cats.splice(1, 0, "davido");
console.log(cats); // [ 'beebo', 'davido', 'cookie', 'tekir', 'turunç' ]
