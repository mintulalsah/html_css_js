// 1,5,8,10
// 2,6,9
// 3,7
// 4
// 0*4+1,1*3+2,2*2+4

// i=0
// 1+ 1+4 , 5+3, 8+2
// 2 2+4 6+3,
// 3 3+4 7+4
// 4 

let row=4;
//12
let colm=4
for(let i=1;i<=row;i++){
    let decresecount=i;
    let printvalue=decresecount;
    let concatevalue='';
    for(let j=0;j<colm-i+1;j++){
        // let value=j*row+value;

        concatevalue =concatevalue+printvalue;
    
        
        // process.stdout.write(printvalue)
        printvalue=(printvalue+row);

    }
    console.log(concatevalue);
    
    concatevalue="";
    decresecount++;
    printvalue=decresecount;
    // console.log("\n");

}