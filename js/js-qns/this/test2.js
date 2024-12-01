const person={
    name:"mintu",
    foo:()=>{
        console.log(this.name);
        
    }
}

person.foo();
person.foo.call(person);
