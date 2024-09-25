console.log("ok");

const a=[1,4,2,34,]
let initavalue=23;
// const sum=a.reduce(callbackfn,intialvalue)
// callbackfn which will call for each element form array

const sum=a.reduce((accumulator,currentvalue,cuureindex)=>{
    console.log(accumulator,currentvalue,cuureindex);
    return accumulator+currentvalue
    
})


console.log(sum);

// [].reduce(()=>{},0)

//without intialvalue
// accoumlutor=arr[0]
// courrntvalue=arr[1]
// cuureindex=0;

// //wihtintialvalue
// let initalvalueis=10
// accoumlutor=10
// courrntvalue=arr[0]
// cuureindex=1;// calnac funtoion will excute form postion at 1 in array



