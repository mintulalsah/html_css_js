const person={
    name:"mintu",
    id:3443,
    foo:()=>{
        console.log(this.name);
        
    }
}
//  Object.defineProperty(person,"id",{value:34,writable:false});
 Object.defineProperty(person,"id",{value:34,writable:false});

person.id=90;
console.log(person);


