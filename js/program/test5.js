const obj={
    foo:"bar",
    func:function () {
    const self=this;
    console.log(self.foo);
    
    (function() {
        console.log(this);
    })();

    },
    
}
obj.func()