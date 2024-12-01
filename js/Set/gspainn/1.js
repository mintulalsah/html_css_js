const user={
    name:"mintu",
    arrowFun:()=>{
        console.log(this.name);
        
    },
    regularFun:function(){
        console.log(this.name);

    }
}

user.arrowFun();
user.regularFun();
const now=user.regularFun;
now();
