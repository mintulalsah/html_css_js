const obj={
    foo:"bar",
    func: function() {
    const self=this;
    //why this is using in side funtion not directly call obj.foo
    console.log(this.foo);
    // console.log(self.foo);
    (function() {
        console.log("IIFY WITH REGULAR FUN",this);
    console.log(self.foo);
    console.log("iff with regular fun mintu",this===globalThis);

    })();
    calldeep=()=> {
        console.log(this);
        console.log(this===global);
        console.log(this==Function);
    }

    calldeep();

    (()=>{
        console.log('IIFY WITH ARROW FUN',this);

    })()
    },
    
}
obj.func();