const str="mmaaa intu lal samhhhhhhhh".replaceAll(/[^a-z0-9]/g,"")
console.log(str.replaceAll(/[^a-z0-9]/g,""))
let freq={};
for(let i=0;i<str.length;i++){
    freq[str[i]]?freq[str[i]]=freq[str[i]]+1:freq[str[i]]=1
}
console.log(freq)
 let max=0;
 let res={item:"",count:0};
for(item in freq){
   console.log(freq[item])
   if(freq[item]>max){
       max=freq[item]
       res.item=item
       res.count=freq[item];
       }
}

console.log(res)