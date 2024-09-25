function throttle(fn, interval) {
    let lastTime = 0; // keeps track of the last time the function was executed

    return function (...args) {
        const now = Date.now(); // current time

        if (now - lastTime >= interval) {
            fn.apply(this, args); // execute the function
            lastTime = now; // update the last time the function was executed
        }
    };
}

// Usage example
function sayHello() {
    console.log('Hello');
}

// Throttle sayHello to only execute once every 2 seconds
const throttledHello = throttle(sayHello, 2000);

// Simulate frequent event triggers (e.g., mouse movement or scrolling)
const a=setInterval(()=>{
    console.log("mintu")
}
, 500); // sayHello will only execute every 2 seconds
setTimeout(() => {
clearInterval(a)
}, 3000);
