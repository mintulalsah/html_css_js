// 0,1,2,3,5,7,9,11,13
const result=[];
let count=10;

function checkPrimeOrnot(num){
    let isPrime=true;
    for(let i=2;i<num;i++){
  if(!(num%i)){
       return false
  }
 
}
return true
}
for(let i=2;result.length<=count;i++){
  if(checkPrimeOrnot(i)){
      result.push(i)
  }
}

console.log(result)