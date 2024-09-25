
function fn(item) { 
    return item.id; 
  }

// Array.prototype.groupBy = function(fn) {
//    return this.reduce((pv,cv,ind)=>{
//     // console.log(pv,cv);
    
//     let a=fn(cv) 
//     // console.log('item',cv,"id",a);
//     // console.log(pv[a]);
    
//     if(pv[a]){
        
//          pv[a].push(cv)
//     }
//     else{
//          pv[a]=[cv]
//     }

//     return pv
//    },{})
// };

Array.prototype.groupBy = function(fn) {
    return this.reduce((pv,cv,ind)=> {
        pv[fn(cv)]?pv[fn(cv)].push(cv):pv[fn(cv)]=[cv]
        return pv
    }
        
       ,{})
 };
let arr=[{"id":"1"},
    {"id":"1"},
    {"id":"2"}]
console.log(arr.groupBy(fn));



// console.log(Object.getOwnPropertyNames({name:"mintu"}));
