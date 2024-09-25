let a=0;
let b=1;

// b=1+2=3
// a=b-a;3-1=2

// b=2+3=5
// a=5-2=3

// b=3+5=8
// a=8-3=5

// b=a+b;3

// a=3
// b=5

// a=5
// b=8



// 1,1,2,3,5,7,12


let fabo=[];
// fabo.push(a)
// fabo.push(b)
while (fabo.length<10) {
 fabo.push(a)
  b=a+b;
  a=b-a;



}
console.log(fabo);
// a=0+1=1
// b=1+1=2


// a=3
// b=3+2

// a=8
// b=13;