// console.log('sjsj');
// 1 5 8 10
// 2 6 9
// 3 7 
// 4 


for (let i = 1; i <=4; i++) {
    // console.log(i);
    
    let lenth=4
    let str=i;
    let finalstr="";
    for (let j = 4; j >=i; j--) {
        // console.log(j);
        
        //158
        finalstr=finalstr+" "+str
        str=str+lenth;
        lenth=lenth-1
        // //5 8 10
        // //3 2 1
        
    }
    console.log(finalstr); 
    finalstr="";   
}