// Exercise 1

let temp = 10;

if (temp > 0) {
  console.log("its freezing");
} else if (temp >= 0 && 15) {
  console.log("its cold");
} else if (temp >= 16 && 25) {
  console.log("its mild");
} else if (temp > 25) {
  console.log("its warm");
}

switch (true) {
  case temp < 0:
    console.log("It's freezing!");
    break;
  case temp >= 0 && temp <= 15:
    console.log("It's cold.");
    break;
  case temp >= 16 && temp <= 25:
    console.log("It's mild.");
    break;
  case temp > 25:
    console.log("It's warm.");
    break;
}

if (num % 2 === 0 && num % 3 === 0) {
  console.log("Divisible by both.");
} else if (num % 2 === 0) {
  console.log("Divisible by 2.");
} else if (num % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case num % 2 === 0 && num % 3 === 0:
        console.log("Divisible by both.");
        break;
    case num % 2 === 0:
        console.log("Divisible by 2.");
        break;
    case num % 3 === 0:
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum1);
const numb = [1, 2, 3, 4, 5];
for (let i = 0; i < numb.length; i++) {
    console.log(numb[i]);
}
const numbers = [3, 7, 2, 5, 10, 6];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);


let c = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
let d = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

let sum5 = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);


const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (parseInt(guess) !== targetNumber);
console.log("Congratulations! You guessed the correct number.");
