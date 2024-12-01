// *
// **
// ***
// ****
// *****

1
12
123
1234
12345
let rowno=5;
let pattern="";
for (let p = 1; p <= rowno; p++) {

    for (let q = 1; q <= p; q++) {
        pattern+=q;
    }
    pattern=pattern+'\n'

}
console.log(pattern);

let a={};
console.log(a.b??1);


















let patternvalue="";
let row=5;
let comn=1;

for (let i = 0; i < row; i++) {
    for (let j = comn; j > 0; j--) {
        patternvalue=patternvalue+"*"
    }
    console.log(patternvalue);
    comn++
    patternvalue=""
    
}
