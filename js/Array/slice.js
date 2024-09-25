const arr=[3,2,3,2,3,2,2,3,2,2]
let size=1;
let loopcount=parseInt(arr.length/3);
console.log(loopcount);

let ansarr=[]

let sliceindex=0;
for (let m = 1; m <=loopcount; m++) {
    ansarr.push(arr.slice(sliceindex,size*m))
    sliceindex=sliceindex+size;
    
}
if (arr.length>size*loopcount) {
    ansarr.push(arr.slice(size*loopcount,arr.length))
    
}

// console.log(arr.slice(0,size));
console.log(ansarr);

