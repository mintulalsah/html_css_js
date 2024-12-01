const foo=()=>{
    console.log(this.name);
    
}

foo.call({name:"mintu"})