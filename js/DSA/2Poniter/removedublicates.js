const arr=[1,2,2,4,4,5,6,99,99];

let move=0;
for (let i = 1; i < arr.length; i++) {

    if (arr[move]==arr[i]) {
       
    }else{
        move++
        arr[move]=arr[i]
    }
    
}
// console.log(arr.splice(move+1,arr.length-move+1))
console.log(arr.slice(0,move+1))

console.log(arr);

console.log(move)
