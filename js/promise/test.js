const promise=new Promise((s,f)=>{
    s();
});
function callit() {
   
    promise.then((a)=>{
        console.log("resolve");
        
    }).catch(()=>{
        console.log('reject');
        
    })
    
    console.log("mintu");
}

// const promise1=new Promise((s,f)=>{
//     s();
// });

// const response=async()=>{
//    const b= await promise1;
//    console.log(b);
   
//    console.log("mintu");
   
// }

callit();
// response();


