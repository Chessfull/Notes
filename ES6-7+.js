// ES5 => ES6, 7 + => Transpiler (Babil.js..)

//#region Arrow Function

function greetingE5() {
  console.log("Hello");
}

const greetingE6 = () => console.log("Hello");
// const greetingE6 = () => {console.log("Hello");}
// const greetingE6 = (name) => {console.log("Hello" + name);}
const sumE6 = (x, y) => x + y;
// const sumE6=(x,y) =>{return x+y; }

// ▼ Lambda expression ▼
const products = [
  { name: "telephone", price: 30000 },
  { name: "television", price: 20000 },
];

console.log(products.map((product) => product.name));

console.log(products.filter((product) => (product.name = "telephone")));

//#endregion

//#region Spread Operator

const sentence = ["Welcome", "to", "Mert", "Topcu", "Notes"];
let combineSentence = "";
for (let word of sentence) {
  combineSentence += word + "";
}
console.log(combineSentence);

// ▼ Just do this with spread operator one line ▼
console.log(...sentence);

// ▼ Rest parameter usage ▼
function sum(...args) {
  let result = 0;
  for (number of args) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 7));

//#endregion

//#region Desctructuring

let fullName = ["Mert", "Topcu"];
let [firstName, lastName] = fullName; // destructuring

//#endregion

//#region Maps



//#endregion
