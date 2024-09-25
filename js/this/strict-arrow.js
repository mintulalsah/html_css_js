'use strict'
const greetarrow=()=>{
    console.log(this);
    //arraw funtion do not have there this
    //they inherit this from their surrounding lexical context.
//so here srounding is global and in nodejs it give {}
//for both strict and non-strict
}

greetarrow();