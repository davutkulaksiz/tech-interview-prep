const isCatAngry = true;

const petCat = new Promise((resolve, reject) => {
  if (isCatAngry) {
    reject("The cat ran away!");
  }
  resolve("You've successfully petted the cat!");
});

petCat.then((res) => console.log(res)).catch((err) => console.error(err));
