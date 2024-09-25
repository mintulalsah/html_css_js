class Employee {
    constructor(id) {
        this.id = id;  // Instance property
    }

    // Prototype method
    print() {
        console.log("mintulalsah");
    }
}

const employe2 = new Employee(4);
const a=Object.getPrototypeOf(employe2);
a.print()


// Now, `print` will be part of the prototype
console.log("Property names of Employee prototype:", Object.getOwnPropertyNames(Object.getPrototypeOf(employe2)));
// Output: ['constructor', 'print']
