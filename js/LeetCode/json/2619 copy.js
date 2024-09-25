function last() {
    console.log(this);
    
    // if (arr.length) {
    //     return arr[arr.length-1]
    // }
    // else{
    //     return -1
    // }
}



Array.prototype.last=function() {
   console.log(this);
   
};
const arr=[1,2,3,4,5]
arr.last()


