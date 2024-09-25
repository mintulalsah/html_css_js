const obj={
    name:"minal",
    greet:function() {
        console.log(this.name,"mauj me rahne ka");
        
    }
}

const newobj={addres:"delhi",name:"mophit"}

const newgree=obj.greet.bind(newobj);

newgree();
console.log(newobj);
