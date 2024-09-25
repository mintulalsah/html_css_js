class Person {
    constructor(name) {
        this.name = name;
    }

    print () {
        console.log("mintu");
    }
}

class Employee extends Person {
  

    print() {
        // super.print()
        //if need to call parent print funtion
     
        console.log("mintulalsah");
    }
}

const employe2 = new Employee(4);

// Calling the method
employe2.print();  // Output: mintulalsah


