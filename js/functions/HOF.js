const greet=(message)=>{

    return (greeter)=>`${message}${greeter}`
}

const dacing=()=>{

}
dacing.name="mintu"
console.log(dacing instanceof Function)

// function dacing(){

// }
// dacing.name="mintu"
// console.log(dacing.name)
console.log(greet("to kaise hai app")('hi gramwasi'));
