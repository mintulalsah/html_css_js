console.log("mintu".split('').reverse().join(''));
let a="mintu"
console.log(a.slice(4,2));
let object=12349122;
let sum=0;
for (const key in object.toString()) {
   sum+=parseInt(object.toString()[key])
}
console.log("sum is ",sum);
