const promise=new Promise((a,b)=>{
    // setTimeout(() => {
    //    a();
    // }, 3000);
})


// promise.then(()=>{
// console.log("promise resole");

// }).catch(()=>{
//     console.log("promise reject");

// })

promise.then(()=>{
    console.log("promise resole");
    
    },()=>{
        console.log("promise reject");
    
    })

console.log(promise);
