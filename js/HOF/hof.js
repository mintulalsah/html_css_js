
var plus=(a,b)=> {
    return a+b;
}

//will it is HOF
const map1=(plus,a,b)=>{
//    return function plus(...arg){
//     return "mohit"
//    }

return plus(a,b);
    

} 

console.log(map1(plus,3,4));



