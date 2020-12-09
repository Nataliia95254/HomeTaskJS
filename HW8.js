// Task 1
function upperCase(str) {
  if (/[A-Z]/.test(str)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

// Task 2
function checkEmail(str) {
  let result = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(str);
  return result;
}

// Task 3
let result = "cdbBdbsbz".match(/d(b*)(d)/i);
console.log(result[0], result[1], result[2]);

// Task 4
let result = "Java Script".split(/\s/);
console.log(result[1] + ", " + result[0]);

// Task 5
function checkCard(str) {
  if (/[0-9^-]{16}/.test(str)) {
    console.log("Correct number of card");
  } else {
    console.log("Please, check card number");
  }
}
