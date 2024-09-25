"use strict"
console.log(this);
//here this will be always global window object in browswer and {} in node

// output {}

(()=> {
    console.log("IIFY WITH ARROW FUN", this);
})();

(function() {
    console.log("IIFY WITH REGULAR FUN", this);
})();

function callit() {
    (()=> {
        console.log(" callit IIFY WITH ARROW FUN", this);
    })();
    
}

callit()