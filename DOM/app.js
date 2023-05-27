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

// STYLING ELEMENTS
// Select Main Heading and Update the Styling
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading.outerHTML); // <h1 id="main-heading" style="color: gray;">Favorite Movie Franchise</h1>
console.log(mainHeading.innerHTML); // Favorite Movie Franchise
mainHeading.style.color = "gray";

// Select Multiple Elements and Update the Styling
const list = document.querySelectorAll(".list-items");
console.log(list);

for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "700";
}


