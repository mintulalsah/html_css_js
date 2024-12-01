const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11],
12], [13, 14, 15]]
console.log(Array.isArray([]))
const resultarr=[];
const arr1=[[1,2,3,4],[1,2,3,4]]
function makefalttenArray(arrdata,n){
    const resultarr=[]; 
    for(let i=0;i<arrdata.length;i++){
    if(Array.isArray(arrdata[i])){
        if (n) {
        makefalttenArray(arrdata[i],n);
        n-- 

        }else{
            resultarr.push(arrdata[i]);

        }

    }
    
    else{
        resultarr.push(arrdata[i]);

    }
}
}
makefalttenArray(arr,2);
console.log(resultarr)