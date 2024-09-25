class Person {
    constructor(name) {
        this.name=name;
    }

    greet(){
        console.log('my name is ',this.name);
        
    }
}

class Employee extends Person{

    constructor(role,name){
        super(name)
        this.role=role;
    }
    myjob(){
        super.greet();

        console.log('working ar role of',this.role);
        
    }
}

const emp=new Employee("software","mintu");
emp.myjob();