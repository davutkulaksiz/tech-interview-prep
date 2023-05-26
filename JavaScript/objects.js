// ANYTHING IS NOT A PRIMITIVE
// IS AN OBJECT
// Functions, arrays, or any class instances

// associate a collection of key-value pairs

const obj = new Object();

// one by one
obj.name = "Clown";
obj.face = "🤡";

// object literal syntax
const gatto = {
  name: "Tekir",
  age: "3",
  favoriteFood: "Tuna Fish",
  pet: function () {
    console.log(`Hello, you petted ${this.name}`);
  },
  pet_alternative_first: function () {
    console.log(this); // {name: 'Tekir, age: '3', favoriteFood: 'Tuna Fish'}
  },
  pet_alternative_Second: () => {
    console.log(this); // {}
  },
};

// WHAT IS `THIS`?
// This refers to the current object that the code is operating in

// Are pet_alternative_first and pet_alternative_second same?
// Arrow functions don't have their own bindings to this which
// means it bypasses our custom function and this becomes the global object

// CALL method

const kedy = {
  name: "Tekir",
};

const köpke = {
  name: "Karabaş",
};

function hello() {
  this.name;
}

const result = hello();
console.log(result); // undefined

const resultKedy = hello.call(kedy);
console.log(resultKedy); // Tekir

const resultKöpke = hello.call(köpke);
console.log(resultKöpke); // Karabaş
