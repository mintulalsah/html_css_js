const nums = [0,1,2,2,3,0,4,2,2];
const val = 2
let count=0;

for( n of nums){
   if(n!==val){
    nums[count]=n;
    count++
   }
}
console.log(nums,count);
