// for input 5  
//   *
//  ***
// *****

// 01234
// 01234
// 01234

// 5-3 =2
// let start=(N/2)+1
// let end=(N/2)+1;
// strat=start-1
// end=end+1

// 9-5

// 012345678
// 012345678
// 012345678
// 012345678
// 012345678




// 1
// 3
// 5

// 1
// 3
// 5
// 7
// 9

let N=12;
let start=parseInt(N/2);
let end=parseInt(N/2);
// console.log(parseInt(N/2)+1);
let startcount=1;
for (let i = 0; i < (N/2); i++) {
    let str="";
  for (let j = 0; j <N; j++) {
    // console.log(start,end);
    
    if (j>=start&&j<=end) {
    str=str+"*"
    }
    else{
         str=str+" "
    }
    
  }
  console.log(str);
  
     start=start-1
     end=end+1
} 