
new Promise((s,r)=>{
setTimeout(() => {
    console.log("1");
}, 0);    
    s();
}).then(()=>console.log("2")
)