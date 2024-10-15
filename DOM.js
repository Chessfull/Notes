//#region DOM

let element;

// GetElementByID, GetElementsByClassName, GetElementsByTagName
element = document.getElementById("title");

element = document.getElementById("title").id;

element = document.getElementById("title").className;

element = document.getElementById("title").classList;

element = document.getElementById("title").style.fontSize = "40px";

element = document.getElementById("title").innerText = "JS Works Dummy";

element = document.getElementById("title").innerHTML = "<p>JS Works Dummy</p>";

element = document.getElementsByClassName("list")[1].innerText;

for (let i = 0; i < 3; i++) {
  console.log(document.getElementsByClassName("list")[i].innerText);
}
for (let i of document.getElementsByClassName("list")) {
  i.style.color = "red";
}

console.log(element);

//QuerySelector, QuerySelectorAll
element = document.querySelector("#title");

element = document.querySelector(".card-header");

element = document.querySelector("div");

element = document.querySelector("li:first-child");

element = document.querySelector("li:nth-child(2)");

console.log(element);

//Children, firstChild, lastChild nth-child, parentElement, nextElementSibling
element = document.getElementById("listSample");
let childrens = element.children;

console.log(childrens);

// Adding html with dom -> insertAdjacentHTML
let ul = document.getElementById("tasklist");

let count=ul.children.length;

let li = `
        <li class="task list-group-item">
      <div class="form-check">
        <input type="checkbox" id="${count+1}" class="form-check-input" />
        <label for="${count+1}" class="form-check-label">Task ${count+1}</label>
      </div>
    </li> 
`;

ul.insertAdjacentHTML("beforeend",li);

// Deleting, updating -> .remove(), removeAttribute("class","id"...), getAttribute("class"), setAttribute("class","newClassName"), classList.add, classList.contains

document.querySelector(".willDelete").children[0].remove();

document.querySelector(".willDelete").children[0].removeAttribute("class");

document.querySelector(".willDelete").children[0].classList.add("bg-danger");

//#endregion
