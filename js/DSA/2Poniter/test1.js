const arr = [1, 2, 3, 4, 6], target = 7
// belo aproch is two pointer only if array data is sorted
// Output: [2, 4]
//find num there sum should be targe 6
let left=0;
let right=arr.length-1;

while(left<right){
const sum=arr[left]+arr[right];
if(sum==target){
    return console.log([arr[left],arr[right]]);
    
}
else if(sum<target) {
    left++
}
else {
    right--
}
}
// for (let i = 0; i < arr.length; i++) {
// if (arr[left]+arr[right]===target) {
//     return console.log([arr[left],arr[right]]);
    
// }    
// }