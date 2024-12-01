function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding methods to the prototype
  Person.prototype.getName = function() {
    return this.name;
  };
  
  Person.prototype.getAge = function() {
    return this.age;
  };
  
  // Creating an instance of the Person function
  const alice = new Person("Alice", 30);
  const alice2 = new Person();

  console.log(alice.getName()); // Output: Alice
  console.log(alice.name); // Output: 30
  console.log(alice2.getAge()); // Output: 30


console.log("Person",Person);  