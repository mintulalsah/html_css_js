const person1=[{
    name:"mintu",
    gender:'female',
    age:2,
},
{
    name:"mintu",
    gender:'male',

    age:5,
},
{
    name:"mintu",
    gender:'female',

    age:6,
},
{
    name:"mintu",
    gender:'male',
    age:60,
},
{
    name:"mintu",
    gender:'female',

    age:6,
},
{
    name:"mintu",
    gender:'female',

    age:6,
},
{
    name:"mintu",
    gender:'female',

    age:6,
},

]

const agesum=person1.reduce((accumulator,currentvalue,cureentindex)=>{
    // console.log(accumulator,currentvalue.age,cureentindex);
    if(currentvalue.gender==='male'){
        accumulator["male"]+=1
        console.log(accumulator);
    }
    else{

        accumulator['female']+=1
    }

        return accumulator
},{ female: 0, male: 0 })

console.log(agesum);
