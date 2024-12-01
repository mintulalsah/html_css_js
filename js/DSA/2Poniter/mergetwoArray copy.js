const arr1=[1,3,6,8,9];
const arr2=[2,4,5];
const result=[];
let arr1Ponter=0;
let arr2Poniter=0;

do {
    console.log("called",arr1Ponter,arr2Poniter);

    if(arr1[arr1Ponter]<arr2[arr2Poniter]){
        result.push(arr1[arr1Ponter]);
        arr1Ponter++;
    }else{
        result.push(arr2[arr2Poniter])
        arr2Poniter++
    } 

} while (arr1Ponter!==arr1.length&&arr2Poniter!==arr2.length);
if(arr1[arr1Ponter]<arr2[arr2Poniter]){
    result.push(...arr2.splice(arr2Poniter))
    console.log(...arr2.splice(arr2Poniter));
    
}
else{
    result.push(...arr1.splice(arr1Ponter))
    console.log(...arr1.splice(arr1Ponter))
    
}
console.log(result);
