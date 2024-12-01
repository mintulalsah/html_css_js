var item = new Array(10).fill("1")

var nextListItem = function() {
    
    if (item.length) {
        item.pop();
        
setTimeout(() => {
    nextListItem()
    
}, 1);    }
};

nextListItem();

// const arr=[1,2,3,4]
// const barr=[1,2,3,4]
// console.log([].eq);



const givenarr=[[1,2],[2,3,3]]
const findItem=[1,2];
// givenarr.map((item)=>{
//     if (JSON.stringify(item)===JSON.stringify(findItem)) {
//      return true
//     }
//     else{

//     }
// })

for (let index = 0; index < givenarr.length; index++) {
    if (JSON.stringify(item)===JSON.stringify(findItem)) {
        return true
       }
       
}
givenarr.map((item)=>{
    if (JSON.stringify(item)===JSON.stringify(findItem)) {
     return true
    }
    else{

    }
})