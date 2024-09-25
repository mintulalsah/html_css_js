const obj={
    foo:"bar",
    func: function() {
    const self=this;
   
    console.log(this.foo);
    console.log(self.foo);

    
    (function() {
        console.log(this.foo);
    console.log(self.foo);


    })();

 

    calldeep=()=> {
        console.log(this);
        console.log(this===global);
        console.log(this==Function);

        
    }

    calldeep();
    },
    
}
obj.func();
//bar
//bar
//bar
//bar