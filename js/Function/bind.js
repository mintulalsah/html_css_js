const obj={
    name:"minal",
    greet:function() {
        console.log(this,"mauj me rahne ka");
        
    }
}

const newobj={addres:"delhi",name:"mophit"}

const newgree=obj.greet;
function callme() {
    console.log("this in funtion",this);
}
newgree();
callme();
