const nums = [0,1,2,2,3,0,4,2,2];
const val = 2
let count=0;
while(nums.some((value)=>val===value)){
const index=nums.findIndex((value)=>val===value);
count ++
nums.splice(index,1)
}
console.log(nums);
