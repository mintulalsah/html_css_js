const M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const M22=[[1,2],[2,3]]
//determinats of matrix
// const M=[     [r00,r01,r02],
//               [r10,r11,r12],
//               [r20,r22,r23]]
// const determinatant=M[0][0]*(M[1][1]*M[2][3]-M[1][2]*M[2][2])-M[0][1]*(M[1][0]*M[2][3]-M[1][2]*M[2][0]+M[0][2]*(M[1][0]*M[2][2]-M[1][1]&M[2][0]));
//for row
// for(let i=0;i<=2;i++){
//     //for colm
    
// }
const minor=M.slice(1).map((arr)=>arr.filter((_,j)=>j!==0))
console.log(minor)