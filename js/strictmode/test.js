// // 'use strict'
"use strict";
// console.log(this);

 window.name="mintuji"
const a={
    name:"mintu",
    run:()=>{
        console.log(this.name);
    }   
}

console.log('here whatever the value of this will be going to inherit by arrow funtion',a.thisvalue)
// console.log(a.run());


// x = 10;  // This will throw an error because 'x' is not declared
