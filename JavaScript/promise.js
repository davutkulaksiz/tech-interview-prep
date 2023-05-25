const isCatAngry = true;

const pet = new Promise((resolve, reject) => {
  if (isCatAngry) {
    reject("The cat ran away!");
  }
  resolve("You pet the cat.");
});

pet
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
