//in apply we pass (thisarg, and parmaeter as arg1,arg2)

const obj={
    name:"minal",
    greet:function() {
        console.log(this.name,"mauj me rahne ka");
        
    }
}

const newobj={addres:"delhi",name:"mophit"}

obj.greet.call(newobj)

function changemyname() {
    console.log(this.name);
    
}
const newobj2={addres:"delhi",name:"pahalwan singh"}

changemyname.call(newobj2)

function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  const o = { a: 1, b: 3 };
  
  // The first argument is bound to the implicit 'this' parameter; the remaining
  // arguments are bound to the named parameters.
  add.call(o, 5, 7); // 16

  