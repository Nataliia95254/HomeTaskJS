// Task 1
function testThrow(expretion) {
            try {
                throw expretion;
            } catch (error) {
                console.log('Caught: ' + error);
            }
    }

// Task 2 

function calcRectangleArea(width, height) {
            if (isNaN(width)|| isNaN(height)) {
                throw 'Parameter is not a number!';
            }
            return width * height;  
    }

    try {
        alert(calcRectangleArea(3, 'a'));
    }
    catch(e) {
        console.log(e);
    }

// Task 3 

function checkAge() {
    let userAge = +prompt("Please, enter your age");
    if (userAge === 0) {
      throw new Error("The field is empty! Please enter your age!");
    } else if (isNaN(userAge)) {
      throw new Error("You entered not a number data!");
    } else if (userAge < 14) {
      throw new Error("You are to young!");
    }
  }
  try {
    let result = checkAge();
    console.log("You can watch movie");
  } catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
  }

// Task 4
class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }
  
  function showMonthName(month) {
    try {
      if (month > 13 || month <= 0) {
        throw new MonthException("Incorrect month number");
      }
      if (month === undefined) {
        throw new MonthException("Empty field");
      }
      if (isNaN(+month)) {
        throw new MonthException("Parameter is not a number!");
      }
    } catch (err) {
      console.log(err.name + " " + err.message);
    }
  
    switch (true) {
      case month === 1:
        console.log("January");
        break;
      case month === 2:
        console.log("February");
        break;
      case month === 3:
        console.log("March");
        break;
      case month === 4:
        console.log("April");
        break;
      case month === 5:
        console.log("May");
        break;
      case month === 6:
        console.log("June");
        break;
      case month === 7:
        console.log("July");
        break;
      case month === 8:
        console.log("August");
        break;
      case month === 9:
        console.log("September");
        break;
      case month === 10:
        console.log("October");
        break;
      case month === 11:
        console.log("November");
        break;
      case month === 12:
        console.log("December");
        break;
    }
  }
// Task 5
  function showUser(id) {
    try {
      if (id < 0) {
        throw new Error(" ID must not be negative " + id);
      }
    } catch (exception) {
      console.log(exception.name + ":" + exception.message);
    }
    if (id > 0) {
      return {
        id: id,
      };
    }
  }
  function showUsers(ids) {
    let result = [];
    for (let i = 0; i < ids.length; i++) {
      result.push(showUser(ids[i]));
    }
    i = result.indexOf(undefined);
    if (i >= 0) {
      result.splice(i, 1);
    }
  
    return result;
  }
  