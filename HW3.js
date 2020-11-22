// Task 1
let arr = [2, 3, 4, 5];
for (let i = 0, production = 1; i < arr.length; i++) {
  production *= arr[i];
}
console.log(production);

let arr = [2, 3, 4, 5];
let i = 0;
production = 1;
while (i < arr.length) {
  production *= arr[i];
  i++;
}
console.log(production);

// Task 2
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even!");
  } else {
    console.log(i + " is odd");
  }
}

// Task 3

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
  }
  return arr;
}

// Task 4
function raiseToDegree() {
  a = +prompt("Please, enter number a");
  b = +prompt("Please, enter number b");
  exp = Math.floor(a) ** Math.floor(b);
  return exp;
}

// Task 5

function findMin() {
  min = Math.min(...arguments);
  return min;
}

// Task 6
function findUnique(arr) {
  var i = 0,
    j = 0,
    L = arr.length;
  do {
    j = i + 1;
    while (arr[i] != arr[j] && j < L) j++;
    i++;
  } while (i < L - 1 && j == L);
  if (j < L) return false;
  return true;
}

// Task 7
function lastItem(arr, x) {
  let l = arr.length;
  if (x === undefined) {
    return arr[l - 1];
  } else {
    console.log(arr.slice(l - x, l));
  }
}

//Task 8

function firstWordUpperCase(string) {
  console.log(
    string
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ")
  );
}
