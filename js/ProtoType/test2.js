const arr=[];

arr.last=function () {
    // console.log(this.length);
    // this.forEach((item)=>{
    //     if (this.length) {
            
    //     }
    // })
    // if(this.length){
    //     return this[this.length-1]
    // }

    (function() {
        console.log(this);
        //here this point to blobal object not arr
        
    })()

    return this.length?this[this.length-1]:-1
    
}

console.log(arr.last());
