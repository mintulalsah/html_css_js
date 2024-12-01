// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;  // Assign name
    this.age = age;    // Assign age
  
    // Method to greet
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Creating new instances (objects) using the constructor
  const person1 = new Person('John', 30);
  const person2 = new Person('Jane', 25);
  
  // Accessing properties and methods
  console.log(person1.name); // Output: John
  console.log(person2.age);  // Output: 25
  
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
  