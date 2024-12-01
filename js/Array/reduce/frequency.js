const name1='vaibhav kumar'
const arr=name1.split('');

const obj={};
console.log(arr);

// const arrj=[1,2,34,]
const aa=arr.reduce((prev,currentvalue,cindex)=>{
    // console.log(prev);
    
    prev[currentvalue]=  prev[currentvalue]?prev[currentvalue]+1:1

    return prev
     
},{})

console.log(aa);
