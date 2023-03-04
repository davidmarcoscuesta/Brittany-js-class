// can't be a reserved keyword
// case sensitive
//one word, no space or hyphens
//can't start with a number

let name = "David"; //string

let num = 4; //number

let prediction = true; //boolean

let colors = ["red", "green", "blue"];

color[2]; //calling variable in array

console.log(myName);

typeof myName; //para saber el tipo de la variable

//operators + - * /

let myOthername = "Dave"; // assigning a variable

myOthername === "Joe"; //true or false based on previous variable

// not -> !

2 + 2 != 5;

// % -> remainder

// 2**2 -> exponent 2 al cuadrado

// bitwise operators

// && -> and, || -> or

//conditional

if (myName === "David" && myOthername === "Dave") {
  print("Hi");
} else {
  print("No");
}

if (num <= 4) {
  print("Hi");
}

// greater of less than, add equal sign =
// for less than or equal to / greater than or equal to

//function

let num1 = 7;
let num2 = 6;

function addingNums(num1, num2) {
  let result = num1 + num2;
  return result;
}

//event listeners

document.querySelector("html").addEventListener("click", function () {
  alert("Welcome");
});

// git command: add, commit our changes, push.
