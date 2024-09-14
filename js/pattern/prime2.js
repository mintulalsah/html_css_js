// 2,3,5,7,11,13,17,19,23,27

// 10:36
console.log("started");

let firstcount=10;
let num=2;

let primenumber=[];

if (num>=2) {
    // while(primenumber.length==10){

    // }

    for (let i = 0; i < 10; i++) {

       if(checkisprime(num)){
        primenumber.push(num);

       }
       num++;
    }
}
function checkisprime(num){
    let isprime=false;
    for (let j = num; j >1; j--) {

      
        if(num%j===0){
        isprime=false;
        }
        else{
            isprime=true;
        }

    }
    return isprime;
}

console.log(primenumber);
