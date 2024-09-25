let a=0;
let b=1;
let fabo=[];
let c=0;
fabo.push(a)
fabo.push(b)
while (fabo.length<10) {
    c=a+b;
    a=b;
    b=c;
    fabo.push(c)
}


// for (let index = 0; index < 10; index++) {
//     // console.log(c);
//     c=a+b;
//     a=b;
//     b=c;
//     fabo.push(c)

    
// }
console.log(fabo);
