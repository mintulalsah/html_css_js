// *
// **
// ***
// ****
// *****


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
