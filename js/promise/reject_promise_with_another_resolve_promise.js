

const promisetest=new Promise((r,rej)=>{
    rej(new Promise((r)=>{

        setTimeout(() => {
            r("mintu");
        }, 3000);
    }))
});

promisetest.catch((newpromise)=>{
    console.log("mi");
    return newpromise
    
}).then((result)=>{
console.log(result);

})