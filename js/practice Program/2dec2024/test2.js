const arr="mintu lal sahh"
let res=""

function checkexist(item){
    for(let j=0;j<res.length;j++){
 
    if(res.includes(item)){
        return true
    }
}
return false
}
for(let i=0;i<arr.length;i++){
    if(!checkexist(arr[i])){
        res=res.concat(arr[i]);
    }
}
console.log("result",res)