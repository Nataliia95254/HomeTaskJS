//Task 2
    console.log("Koreniuk")

// Task 3
    let name = "Nataliia";
    let age = 25;
    console.log(name,age); // or use 'alert'
    name = age;
    console.log(name,age);

// Task 4

    let object = {
        String: "cat",
        Number: 1,
        Boolean: true,
        Undefined: undefined,
        Null: null 
    }
// Task 5
    let isAdult = confirm(" Are you already 18?"); 
    console.log(isAdult); 

// Task 6 

    let name = "Nataliia";
    console.log(typeof(name));
    let surname = "Koreniuk";
    console.log(typeof(surname));
    let group = "JavaScript Fundamentals";
    console.log(typeof(group));
    let year = 1995; 
    console.log(typeof(1995));
    let maritalStatus = false; 
    console.log(typeof(maritalStatus));
    
    console.log(year,maritalStatus,name,surname,group);

    let one = null;
    let two; 
    console.log(typeof(one),(two)); 

    // Task 7 

    let login = prompt("Enter your login","User");
    let email = prompt("Enter your email","example@gmail.com");
    let password = prompt("Enter your password");
    alert("Dear " + login + " your email is " + email + " your password is " + password);

    // Task 8 

    let secondInHour = 60 * 60;
    let secondInDay = secondInHour * 24;
    let secondInMonth = secondInDay * 31; 
    console.log("Second in one hour is " + secondInHour + " in one day - " + secondInDay + " in one month with 31 days " + secondInMonth);
