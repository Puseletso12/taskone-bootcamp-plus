// Exercise 1: Numbers

// 1.

let num = 21;
let floating = 21.3;
console.log(num);
console.log(floating);

// 2.

let number1 = 23;
let number2 = 21;

//Addition
let addition = number1 + number2;
console.log(addition);

//Subtraction
let Subtraction = number1 - number2;
console.log(Subtraction);

//Multiplication
let multiplication = number1 * number2;
console.log(multiplication);

//Division
let division = number1 / number2;
console.log(division);

//Modulus
let modulus = number1 % number2;
console.log(modulus);

//Exponentiation
let exponentiation = number1 ** number2;
console.log(exponentiation);

// Exercise 2

// 1.

let value1 = 10;
let value2 = 5;
// Equal to (==)
let isEqual = value1 == value2;
console.log("Is Equal:", isEqual);

//Strictly equal to (===)
let strictlyEqual = value1 === value2;
console.log("Strictyly Equal to:", strictlyEqual);

//Not equal to (!=)
let isNotEqual = value1 != value2;
console.log("Is not Equal:", isNotEqual);

//Not equal value or not equal type (!===)
let isNotEqualValueorisNotEqualType = value1 !== value2;
console.log(
  "Is Not Equal Value or is Not Equal Type:",
  isNotEqualValueorisNotEqualType
);

//Greater than (>)
let greaterThan = value1 > value2;
console.log(greaterThan);

//Less than (<)
let lessThan = value1 < value2;
console.log("Less than:", lessThan);

//Greater than or equal to (>=)
let greaterThanorEqualTo = value1 >= value2;
console.log("Greater than or Equal to:", greaterThanorEqualTo);

//Less than or equal to (<=)
let lessThanorEqualTo = value1 <= value2;
console.log("Less than or Equal to:", lessThanorEqualTo);

// 2.

let x = 8;
let y = 12;

// if x is greater than y
let isXGreaterThanY = x > y;
console.log("Is x greater than y:", isXGreaterThanY);

//if x is less than or equal to y
let isXLessThanOrEqualToY = x <= y;
console.log("Is x less than or equal to y:", isXLessThanOrEqualToY);

//if x is equal to y
let isXEqualToY = x == y;
console.log("Is x equal to y:", isXEqualToY);

//if x is not equal to y
let isXnotEqualToY = x != y;
console.log("Is x not equal to y", isXnotEqualToY);

// 3.

let a = true;
let b = false;

// a AND b
let aAndb = a && b;
console.log("a AND b:", aAndb);

// a OR b
let aOrb = a || b;
console.log("a OR b:", aOrb);

// NOT a
let Nota = !a;
console.log("NOT a:", Nota);

// 4.

let p = 10;

// p = p + 10
p += 10;
console.log(p);
//p = p - 10
p -= 10;
console.log(p);
// p = p * 10
p *= 10;
console.log(p);
// p = p / 10
p /= 10;
console.log(p);
// p = p % 10
p %= 10;
console.log(p);
