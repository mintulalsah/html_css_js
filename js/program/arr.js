const a=[1,2,3,4]
a.name="mintu"
a[9]=90;
console.log(a);
console.log(a[8]);
console.log(a.length);
console.log(a.name);


// const employee={
//     name:"mintulal"
// }
// const employee1=Object.create(employee);

// delete employee1.name

// console.log(employee1.name)


const employee={
    name:"mintulal"
}
  let employee1 = {
    
  };
  
  employee1.__proto__ = employee; // sets rabbit.[[Prototype]] = animal
  console.log(employee1);
  


