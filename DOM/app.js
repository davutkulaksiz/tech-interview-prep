// getElementBy
const title = document.getElementById("main-heading");
console.log(title);

const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

const listItemsByTag = document.getElementsByTagName("li");
console.log(listItemsByTag);

// querySelectors
const container = document.querySelector("div");
console.log(container);

const containers = document.querySelectorAll("div");
console.log(containers);

const secondListItem = document.querySelector("ul li:nth-child(2)");
console.log(secondListItem);


