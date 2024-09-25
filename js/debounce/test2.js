function debouncefun() {
    let time=3000;
let timeout;
return function() {
clearTimeout(timeout);
timeout= setTimeout(() => {
console.log("sayhi");

}, time);
}


}

const fun=debouncefun();
fun();
fun();
