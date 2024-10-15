// (click, function)
let btn = document.querySelector("#addNewTask");

btn.addEventListener("click", function () {
  // -> If type is button no refresh
  console.log("clicked event button");
});

// For preventing from refresh even for submit actions for server
btn.addEventListener("click", function (event) {
  console.log(event); //PointerEvent
  event.target; // reaching clicked button
  event.preventDefault();
});

//Combining with insert html
function addingText() {
  let inputDummy = document.querySelector("#inputId");
  if (inputDummy.value == "") {
    alert("Press write any value");
  } else {
    let li = `<li>${inputDummy.value}</li>`;
    document.querySelector(".input-group").insertAdjacentHTML("beforeend", li);
  }
}
btn.addEventListener("click", addingText); // calling function with click event

//Keyboard Event
btn.addEventListener("keypress", function (event) {
  if (event == "Enter") {
    btn.click();
  }
});

// Events => 'onchange', 'onclick', 'onmouseover', 'onload', 'resize', 'mousemove' ...