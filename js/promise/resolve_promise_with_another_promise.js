

const promisetest=new Promise((r,rej)=>{
    r(new Promise((r)=>{

        setTimeout(() => {
            r("mintu");
        }, 3000);
    }))
});

promisetest.then((newpromise)=>{
    console.log("first reolsve");
    return newpromise;
    
}).then((data)=>{
    console.log("second resolved",data);
    
})
