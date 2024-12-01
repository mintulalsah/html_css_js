const users=[
    {
        name:"mintu",
        age:56,
        id:1
    },
    {
        name:"mintu",
        age:562,
        id:2
    }
    ,
    {
        name:"bintu",
        age:56,
        id:3
    },
    {
        name:"aintu",
        age:56,
        id:4
    },
   
]

const namearr=users.map((item)=>item.name).sort()
let sortedarr=[];
for (let index = 0; index < namearr.length; index++) {
   users.map((item,ind)=>{
    if (namearr[index]===item.name) {
        users.splice(ind,1)
        sortedarr.push(item)
    }
   })
    
}
console.log(namearr);
console.log(sortedarr);

