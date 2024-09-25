function callit() {
console.log(this);
    // this refer the current object of that function is property of
    //since here function is in global context so here this efer global object
}
// callit()


function deep() {
     function deep2(){
        console.log(this);
        
    }
    deep2()
}
// in browswer global object is winodw
// but in nodejs global object is global
// console.log(this instanceof Object);
deep();

function functionforclass() {
    console.log("mje ma");
    
}
class Whatis_this {
     a=functionforclass;
  constructor(name){
this.name=name;
  }
  
}

const person=new Whatis_this("mintu");
person.a()
