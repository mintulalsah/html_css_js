// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let a =prompt('enter anumber');
let result="";
// console.log(typeof a);
console.log("3".repeat(3))

let arr=new Array(a.length).fill(0);

while(a){
   
    arr[a%10]=arr[a%10]+1
    a=parseInt(a/10);
}
console.log(arr);
function concate(value,index){
    return index.toString().repeat(value);
}
for (let i=0;i<arr.length;i++){
    
    result+=concate(arr[i],i)
}
console.log(result);