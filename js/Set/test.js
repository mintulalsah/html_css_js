var array =[1,[2,3],[1,[3,5],4]];
const res=[];

function flatArray(inputarray){
for(let i=0;i<inputarray.length;i++){
    if(Array.isArray(inputarray[i])){
        flatArray(inputarray[i]);
    }else{
        res.push(inputarray[i])
    }
}
}

flatArray(array);
console.log(res)
const resArray=[];
const setdata=new Set(res);
setdata.forEach((item)=>{
    resArray.push(item)
})
console.log(resArray);


// Expected output : [1,2,3,4,5]