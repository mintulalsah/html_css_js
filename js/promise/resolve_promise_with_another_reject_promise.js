

const promisetest=new Promise((r,rej)=>{
    r(new Promise((res,rej)=>{

        setTimeout(() => {
            rej("mintu22");
        }, 3000);
    }))
});

promisetest.then((newpromise)=>{
    console.log("resolve first promise immediatly");
    // return newpromise
    
}).then((data)=>{
    console.log("called",data);
    
}).catch((err)=>{
    console.log("reject",err);

})
