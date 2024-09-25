const arr=[3,2,3,2,3,2,2,3,2,2,1]

let size=2;
let a=8;
let b=0;
b=a
console.log((b));
let chuckedarr=[];

for (let j = 0; j < arr.length; j+=size) {
    chuckedarr.push(arr.slice(j,j+size))
}

console.log(chuckedarr);
