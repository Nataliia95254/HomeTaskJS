// Task 1

let x = 1;
let y = 2;

let res1 = x + "" + 2;
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x) || y;
console.log(res3);
console.log(typeof res3);

let res4 = x * (y + "a");
console.log(res4);
console.log(typeof res4);

// Task 2
let number = prompt("Please, enter the number", " ");
evenNumber = number % 2 == 0 && number > 0;
console.log(evenNumber);

sevenDivision = number % 7 == 0;
console.log(sevenDivision);

// Task 3

let arr = [];
arr[0] = 1;
arr[1] = "2";
arr[2] = true;
arr[3] = null;
console.log(arr.length);
arr[4] = prompt("Enter any word or number", "");
console.log(arr[4]);
arr.shift();
console.log(arr);

// Task 4

let cities = ["Rome", "Lviv", "Warsaw"];
cities.join("*");

// Task 5

let isAdult = prompt(" How old are you?", "");
if (isAdult >= 18) {
  console.log("You have reached the age of majority");
} else if (isAdult < 10) {
  console.log("You are still to young");
} else {
  console.log("You are a teenager, come back in a few years");
}

// Task 6

a = +prompt("Please, enter side A");
b = +prompt("Please, enter side B");
c = +prompt("Please, enter side C");

let p = (a + b + c) / 2;
console.log(p);
area_triangle = Math.pow(p * (p - a) * (p - b) * (p - c), 0.5);
if (Boolean(area_triangle) == false) { // перевірка коректності введених користувачем даних 
  console.log("Incorect data");
} else {
  console.log("The area of ​​the triangle= " + area_triangle.toFixed(3));
}
if (c ** 2 == a ** 2 + b ** 2) {
  console.log("90");
} else {
  console.log("not 90");
}

// Task 7

let currentDate = new Date();
let time = currentDate.getHours();
console.log(time);

if (time == 23 || time == 24) {
  console.log("Доброї ночі");
} else if (time >= 1 && time <= 5) {
  console.log("Доброї ночі");
} else if (time > 5 && time <= 11) {
  console.log("Доброго ранку");
} else if (time >= 12 && time < 17) {
  console.log("Доброго дня");
} else if (time >= 17 && time < 23) {
  console.log("Доброго вечора");
} else {
  console.log("Невідомий час");
}

let currentDate = new Date();
let time = currentDate.getHours();
console.log(time);

switch (true) {
  case time == 23 || time == 24:
    console.log("Доброї ночі");
    break;
  case time >= 1 && time <= 5:
    console.log("Доброї ночі");
    break;
  case time > 5 && time <= 11:
    console.log("Доброго ранку");
    break;
  case time >= 12 && time < 17:
    console.log("Доброго дня");
    break;
  case time >= 17 && time < 23:
    console.log("Доброго вечора");
    break;
  default:
    console.log("Невідомий час");
}
