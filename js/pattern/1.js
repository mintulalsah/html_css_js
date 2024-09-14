// *****
// ***
// **
// *

let patternvalue="";
let row=5
let colm=5;
for (let i=0;i<row;i++){
    for(let j=0;j<colm;j++){

        patternvalue=patternvalue+"*"
        
    }
    colm--;
    console.log(patternvalue);
    patternvalue="";


}