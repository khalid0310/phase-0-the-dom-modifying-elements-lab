const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);
const main = document.getElementById("main");
main.textContent = "You've changed what's on the screen!";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

main.className = "pet-listing dog";

main.classList.remove("dog");
main.classList.add("cat", "sale");

ul.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "khalid is the champion";

document.body.appendChild(newHeader);
