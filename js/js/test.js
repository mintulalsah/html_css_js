
var createHelloWorld = ()=> {
    
    return console.log("Hello World");
    ;
    
};

function name1() {
    return "mintu"
}
console.log(name1());

const a=createHelloWorld;
a()



var createHelloWorld = ()=> {
    const c=()=>{
        return "Hello World"
    }   
        return c;
        
    };
    const f=createHelloWorld;
    console.log(f());
    
    let i=0;
    var createCounter = function(n) {
        
        
        return function() {
            return n+i++;
        };
    };
    
     
     const counter = createCounter(10)
     console.log(counter());
     console.log(counter());
     console.log(counter());

     
    
    
     
     
    
    
    
     
     

 
 