// function debounce(func,t) {

//     let timeout;
//  return function(...rest){
//     console.log(rest);
    
//     // console.log(timeout);
    
//     clearTimeout(timeout)
//     timeout= setTimeout(() => {
//             func(...rest);
//         }, t);
    
//  }
 

    
// }


//call after 50ms
// console.log(Date.now);

// debounce(()=>{console.log("called")},5000)

// setTimeout(() => {
// debounce(()=>{console.log("called")},5000)
    
// }, 2000);


function mintu(...params) {
    return (function (...args) {
        console.log(args);
    });  // Immediately invoke the function with 'params'
}
const obj={
    key:mintu()
}
console.log(obj);


// mintu(1, 2, 3);  // Example call with arguments

(() => {
    console.log("IIFE with arrow function!");
  })();
