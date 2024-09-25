const person={
    name:"mintu"
}

console.log(person.name);

function logproperty(propertyname) {
    console.log(person.propertyname);//undefined
    console.log(person[propertyname]);//mintu
    
}

logproperty("name")