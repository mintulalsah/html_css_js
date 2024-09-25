class Person {
    constructor(name) {
        this.name = name;
    }

    print= ()=> {
        console.log("mintu");
    }
}
const person=new Person("mintu");

console.log(person instanceof Object);
