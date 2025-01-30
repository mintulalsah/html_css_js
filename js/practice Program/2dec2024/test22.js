const arr=[1,2,2,1,4,5,5,5,6,1,2,9]
const res=[]
function checkexist(item){
    for(let i=0;i<res.length;i++){
    if(res.includes(item)){
        return true
    }
}
return false
}
for(let i=0;i<arr.length;i++){
    if(!checkexist(arr[i])){
        res.push(arr[i])
    }
}
console.log(res)