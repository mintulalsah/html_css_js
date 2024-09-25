let arr=[2,3,3,4,2,6,5,4,8,8,8,10,10,10,11]

let newarr=[];

function checexistornoy(arritem) {
 if (newarr.length) {
    for (let k = 0; k < newarr.length; k++) {
        if(newarr[k].item===arritem){
    
            newarr[k].count += 1;
            return true
        }
       
    }
 }
else{
    return false

}
 
}
for (let i = 0; i < arr.length; i++) {
    if (!checexistornoy(arr[i])) {
        newarr.push({item:arr[i],count:1})
        
    }
   
}

console.log(newarr);
