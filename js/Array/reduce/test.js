const person1=[{
    name:"mintu",
    age:2,
},
{
    name:"mintu",
    age:5,
},
{
    name:"mintu",
    age:6,
},
{
    name:"mintu",
    age:6,
}]

const man2=[]
// without initalvalue
// const agesum=person1.reduce((accumulator,currentvalue,cureentindex)=>{
//     console.log(accumulator.age,currentvalue.age,cureentindex);
    
//     return accumulator.age+currentvalue.age
// })

// console.log(agesum);
//with intialvalue
const agesum=person1.reduce((accumulator,currentvalue,cureentindex)=>{
    console.log(accumulator,currentvalue.age,cureentindex);
    
    return accumulator+currentvalue.age
},0)

console.log(agesum);
