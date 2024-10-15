//#region Basics

console.log("Hello's");

// Using var
var variableName = "variable";

// Using let
let variableName2 = "variable";

//Using typeof
console.log(typeof variableName);

//Using casting
let variableString = "10";
console.log(Number(variableString));
console.log(parseInt(variableString));
console.log(parseFloat(variableString));
let variableNumber = 10;
console.log(variableNumber.toString());

//Auto casting
let result = 2020 - "2000";
console.log(result);

//Conditions
if ((3 > 2 && 5 > 2) || 6 > 3) {
  console.log("true");
} else {
  console.log("else");
}

//Ternary
let ternary = 3 > 2 ? "Ok" : "No";

//Const
const variableName="Trail";
'variableName="...."; // -> cant change'

//#endregion

//#region Strings

//Backtick
let text = "Hello";
let message = `He said ${text}`;
console.log(message);

//Methods
let trailText = "Hello World I m JS Developer";
text = text.toLowerCase();
text = text.toUpperCase();
text = text.length;
var textChar = text[1];
text = trailText.slice(0, 3);
text = text.substring(0, 2);
text = text.trim();
text = text.indexOf("H");
text = trailText.split(" ");

//#endregion

//#region Numbers

var stringNumber = "10";
var castingNumber = Number(stringNumber);
var castingNumber2 = parseInt(stringNumber);

//Checking number format
var booleanSample = isNaN(castingNumber2);

let floatNumber = 15.123213213;
let number = floatNumber.toPrecision(4); // Making 4 character
let number1 = floatNumber.toFixed(4); // Making 4 character of rightside

number = Math.round(2.4); //Math functions abs, sqrt, min-max
number = Math.random();
number = Math.floor(Math.random() * 10);
console.log(number);

//#endregion

//#region DateTime

//Get Methods
let now = new Date();
check = now;
check = now.getDate();
check = now.getDay(); // getFullYear, getHours ...
console.log(check);
let date = new Date();

//Set Methods
check = now.setFullYear(2025);

//#endregion

//#region Arrays

let products = ["iphone", "television"];

products[1] = "samsung";

let colors = ["black", ["blue", "pink"]];
console.log(colors[1][1]);

let splitProducts = products.join(" ");

let deleted = products.pop(); // last item deleted
deleted = products.shift(); // first item deleted

let push = products.push("last item"); // adding item to last

let concate = products.concat(colors);

let newArray = concate.splice(0, 1, "bmw"); // Starting from index 0, delete 1 item and add bmw.

//#endregion

//#region Objects

let user = {
  name: "Mert",
  last: "Topcu",
  age: 29,
  adres: {
    city: "Edirne",
    distinct: "Center",
  },
};
console.log(user.name);
console.log(user["name"]);

let user2 = {
  name: "Mert",
  last: "Topcu",
  age: 29,
  adres: {
    city: "Edirne",
    distinct: "Center",
  },
};

let users = [user, user2];

//#endregion

//#region Loops

let numbers = [3, 5, 7, 9];

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i in numbers) {
  // 'in' i => index 0,1,2,3 ...
  console.log(i);
}

for (let i of numbers) {
  // 'of' i => elements 3,5,7,9 ...
  console.log(i);
}

let userSample = {
  name: "Mert",
  last: "Topcu",
  age: 29,
  adres: {
    city: "Edirne",
    distinct: "Center",
  },
};

for (let key in userSample) {
  // 'key' each object jey ...
  console.log(userSample[key]);
}

//#endregion

//#region Functions

function greeting() {
  console.log("Hello");
}
greeting();

function greeting(message) {
  console.log(message);
}
greeting("Hello");

function ageCalculator(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function limitlessParameter() {
  let result = 0;
  for (let i of arguments) {
    result += i;
  }
  return result;
}

console.log(limitlessParameter(3,5,7));

//#endregion

