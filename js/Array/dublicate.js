function removeDublicate(arr) {
    
   return arr.filter((item,index)=>{
    return arr.indexOf(item)===index
   })
}

console.log(removeDublicate([3,3,2,1]));
