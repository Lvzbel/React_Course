class Person {

  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {

  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    // Will return true or false if depending if the major is empty or not
    // This method is call: Logical Not Operator.
    return !!this.major
  }

  getDescription() {
    // Calling the original method
    let description = super.getDescription();

    if(this.hasMajor()) {
      description+= ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` Im visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Student('Rodrigo O. Coto', 31, 'Computer Science');
console.log(me.getDescription());

const brother = new Student('Douglas M. Coto', 24, 'Japanese Language');
console.log(brother.getDescription())

const other = new Student();
console.log(other.getDescription());

const personOne = new Traveler('Rodrigo', 31, 'El Salvador');
console.log(personOne.getGreeting());

const personTwo = new Traveler();
console.log(personTwo.getGreeting());