// Array.prototype.groupBy = function(fn) {
//     let groupedArr=[]
//     this.forEach((element) => {  
//         let a=fn(element)      ;
//         groupedArr.push({[a]:[element]})
//     });
//     return groupedArr
// };
function fn(item) { 
    return item.id; 
  }
// let arr=[2,4,1,6,7]
// console.log(arr.groupBy(fn));

Array.prototype.groupBy = function(fn) {
    let groupedArr={};
   this.forEach((element) => {  
       let a=fn(element) 
       if (Object.getOwnPropertyNames(groupedArr).includes(a)) {
        console.log(groupedArr[a]);
        
       groupedArr[a].push(element)

       }
       else{
        console.log(groupedArr);
        
        groupedArr[a]=[element]
       }
   });
   return groupedArr
};
let arr=[{"id":"1"},
    {"id":"1"},
    {"id":"2"}]
console.log(arr.groupBy(fn));

console.log(Object.getOwnPropertyNames({name:"mintu"}));
