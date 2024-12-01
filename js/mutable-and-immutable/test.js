let a=[1,2,3,4]
let b=[1,2,3,4]
console.log(a==b);//false because here w ecomparing a memroy refrence to array object to b which not same 
//becayse btoh arr object is have diffent memory address, if they both pint ot same memory address then they will be same

// b=a;

b[0]=5;
a=[5,2,3,4]
// a[5]=90;
console.log(a);
console.log(b);
console.log(a==b);





