function callit(name) {
    this.name=name;
console.log(this);
    
}

callit.prototype.greet=()=>{
    console.log("this");
    return this.name;
    // when add arrwo funtion prototype is go to direct method of object
    
}

const a=new callit("mintulalsah");

console.log(a.greet());
