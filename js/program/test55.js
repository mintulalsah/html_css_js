function call() {
    
    console.log(call instanceof Function);
    console.log(setInterval instanceof Function);

    console.log(Function instanceof Object);
    // console.log(Object instanceof this);

    function callin() {
    console.log(this);
        
    }
    callin();

}
// call()

console.log(global);

