

const promisetest=new Promise((r,rej)=>{
    rej(new Promise((r,rej)=>{

        setTimeout(() => {
            rej("mintu");
        }, 3000);
    }))
});

promisetest.catch((newpromise)=>{
    console.log("immeditely reject");
    return newpromise
    
}).catch((eror)=>{
    console.log("seonf reject promise",eror);
    
})