const arr1=[1,3,5];
const arr2=[2,4,6,8,9,10];
const result=[];
let arr1Pointer=0;
let arr2Pointer=0;

while(arr1Pointer!==arr1.length&&arr2Pointer!==arr2.length){

    if(arr1[arr1Pointer]<arr2[arr2Pointer]){
        result.push(arr1[arr1Pointer]);
        arr1Pointer++;
    }else{
        result.push(arr2[arr2Pointer])
        arr2Pointer++
    }

}
if (arr1Pointer < arr1.length) {
    result.push(...arr1.slice(arr1Pointer));
} else if (arr2Pointer < arr2.length) {
    result.push(...arr2.slice(arr2Pointer));
}
console.log(result);
