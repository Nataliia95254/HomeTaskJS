// Task 1

function propsCount(currentObject) {
    let arr = Object.keys(currentObject);
    console.log(arr.length);
  }
  let mentor = {
    cours: "JS fundamental",
    duration: 3,
    direction: "web-development",
  };
  
  // Task 2
  let dog = {
    name: "Rex",
    age: 3,
    type: "poodle",
    goodBehavior: true,
    likeCats: false,
  };
  
  function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
  }
  
  // Task 3
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      console.log(this.surname + " " + this.name);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(midleName) {
      super.showFullName();
      console.log(midleName);
    }
  
    showCourse() {
      let today = new Date();
      let nowYear = today.getFullYear();
      return nowYear - this.year;
    }
  }
  
  let stud1 = new Student("Petro", "Petrenko", 2015);
  console.log(stud1.showFullName("Petrovych"));
  console.log("Current course: " + stud1.showCourse());
  
  // Task 4
  
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    showSalary() {
      console.log(this.fullName + " salary: " + this.dayRate * this.workingDays);
    }
    #experience = 1.2;
    showExp() {
      return this.#experience;
    }
  
    showSalaryWithExperience() {
      console.log(
        this.fullName +
          " salary: " +
          this.dayRate * this.workingDays * this.#experience
      );
    }
  
    get newExp() {
      return this.#experience;
    }
  
    set setExp(value) {
      this.#experience = value;
    }
  }
  
  let worker1 = new Worker("Jon Johnson", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp());
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp());
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  console.log(worker2.fullName);
  worker2.showSalary();
  console.log("New experience: " + worker2.showExp());
  worker2.showSalaryWithExperience();
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp());
  worker2.showSalaryWithExperience();
  
  let worker3 = new Worker("Andy Ander", 29, 23);
  console.log(worker3.fullName);
  worker3.showSalary();
  console.log("New experience: " + worker3.showExp());
  worker3.showSalaryWithExperience();
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp());
  worker3.showSalaryWithExperience();
  
  // Task 5
  class GeometricFigure {
    getArea() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(a, h) {
      super();
      this.a = a;
      this.h = h;
    }
    getArea(a, h) {
      super.getArea;
      let area_triangle = 0.5 * this.a * this.h;
      return area_triangle;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(a) {
      super();
      this.a = a;
    }
    getArea(a) {
      super.getArea;
      let area_square = this.a * this.a;
      return area_square;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(r) {
      super();
      this.r = r;
    }
    getArea(r) {
      super.getArea;
      let area_circle = Math.PI * this.r * this.r;
      return area_circle;
    }
  }
  function handleFigures(figures) {
    let arrSum = [];
    for (i = 0; i < figures.length; i++) {
      console.log(
        "Geometric figure: " +
          figures[i].toString() +
          " - area: " +
          figures[i].getArea()
      );
      arrSum.push(figures[i].getArea());
    }
    let totalArea = arrSum.reduce(function (sum, current) {
      return sum + current;
    }, 0);
    console.log(totalArea);
  }
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  