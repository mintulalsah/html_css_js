const nums1 = [1,2,3];
const nums2 = [2,5,6];
const res=[];

for(let i=0;i<3;i++){
    for(let j=0;j<2;j++){
    if(nums1[i]<nums2[j]){
        res.push(nums1[i])
    }else{
         res.push(nums2[j])
    }
}
}

console.log(res)