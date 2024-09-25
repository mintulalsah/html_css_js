class Person {
    constructor(name) {
        this.name=name;
    }

    print(){
        console.log("okok",this);
        this.print2()
    }
    print2(){
        console.log("print");
        
    }
}

const person=new Person("mohit singh");
person.print();