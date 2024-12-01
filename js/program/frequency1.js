let array=[2,2,3,5,1,1,1,1,7,6,2,3,3,3,8,8]
let result=[];
for (let i = 0; i < array.length; i++) {
    if (result[array[i]]) {
        result[array[i]]=result[array[i]]+1
    }
    else{
        result[array[i]]=1;
    }
}
let max=0;
const res={data:null,count:null};

for (let j = 0; j < array.length; j++) {
    
    if (max<result[j]) {
        max=result[j]
        res.data=j;
        res.count=result[j]
    }
}
console.log(result);
console.log(max);
console.log(res);


