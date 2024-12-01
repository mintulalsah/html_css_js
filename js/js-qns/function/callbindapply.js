function greeting(gender) {
    return `${this.name} i am ${gender}`
}
const person={name:"mohit"}

//here calling an method of object after bind othis method ot an object
console.log(greeting.call(person,'male'));
//bind create bound function of object that we pas not call or envoked imeditely
console.log(greeting.bind(person,'male'));
//same as call but pass parameter as array
console.log(greeting.apply(person,{}));


