const arr1=[1,3,5];
const arr2=[2,4,6];
const resarr=[...arr1,...arr2];
//for eahc num
for(let i=0;i<resarr.length;i++){
for(let j=i+1;j<resarr.length;j++){

if(resarr[i]>resarr[j]){
/* a=a+b;
b=a-b;
a=a-b; */
resarr[i]=resarr[i]+resarr[j];
resarr[j]=resarr[i]-resarr[j];
resarr[i]=resarr[i]-resarr[j];

}

}

}
console.log(resarr);