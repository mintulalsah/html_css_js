'use strict'
// greetarrow=()=>{
//     console.log(this);

// }
//above code will giev aerrro because in strict mode varibale should define with either letvarconst


const greetarrow=()=>{
    console.log(this);

}
function callit() {
    console.log(this);
}
callit();
greetarrow();