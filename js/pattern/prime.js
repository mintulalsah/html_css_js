// 2,3,5,7,11,13,17,19,23,27
let num = 2;
let primenumber = [];
while (primenumber.length !== 10) {
  if (checkisprime(num)) {
    primenumber.push(num);
  }
  num++;
}
function checkisprime(num) {
  let isprime = true;
  for (let j = num-1; j > 1; j--) {
    console.log(num, j);

    if (num % j === 0) {
      isprime = false;
    } else {
      isprime = true;
    }
  }
  return isprime;
}

console.log(primenumber);
