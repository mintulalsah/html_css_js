
const person={
    "name":"mintu",
    "add":"delhi"
}

console.log(Object.getOwnPropertyNames(person))

const result=[];
const arr=[{"name":"mintu"},{"name":'sathish',"add":"delhi"},{"name":'aman'}]

for(let i=0;i<arr.length;i++){
    let innerarr=[];
    let keysare=Object.getOwnPropertyNames(arr[i])
    for(let j=0;j<keysare.length;j++){
         innerarr.push(keysare[j])//key
          innerarr.push(arr[i][keysare[j]])//value
    }
    result.push(innerarr)
    innerarr=[];
    keysare=[];
}
console.log(result)
// [["nmae","mintu"],["name","sathis"]]