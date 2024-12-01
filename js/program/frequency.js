
let arr=[2,2,3,5,1,1,7,6,2,3,8]
let result=[];

let result2=[];
for (let m = 0; m < arr.length; m++) {

    if (result2.includes(arr[m])) {
    }
    else{
        result2.push(arr[m]);

    }
    
}


console.log(result2);


for (let i = 0; i < result2.length; i++) {

    let obj={value:result2[i],count:0}
    for (let n = 0; n < arr.length; n++) {

        if (result2[i]===arr[n]) {
            // console.log(true);
            
            obj.count=obj.count+1;
        }
        console.log(obj);
        
        
    }
    result.push(obj)
    // obj.count=0
   
}
console.log(result);
