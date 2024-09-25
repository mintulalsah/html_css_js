const a=[];
// a.push();
// console.log(a.length);

// a.push();
// a.pop();
// if ({}) {
//     console.log("called");
    
// }
// console.log(if([]){});


function recursivecall() {
    
let item=['s'];
item.pop();
console.log("called");


    if(item){
        recursivecall()
    }
}
recursivecall();