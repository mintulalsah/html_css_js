class A{
    sayhi(){
        console.log("hi from A");
        
    }
}

class B{
    sayhi(){
        console.log("hi from B");
        
    }
}

class C extends B extends A{
    
}