const arr=[1,2,3,4]
const arrmap=new Set(arr);
console.log(typeof arrmap)
console.log(arrmap);
for( let item of arrmap){
    console.log(item);
    
}

const mapobject=new Map();
mapobject.set('1',"mintu")
mapobject.set('2',"mintu lal sah")

console.log(mapobject);
for( let item of mapobject){
    console.log("item");
    
}
let mapflattenarr=[]

const newmap=new Map([['name',"mintu"],['price',"23"]])
newmap.forEach((value,key,map)=>{
    if (Array.isArray(key)) {
        
    }
    mapflattenarr.push(key)
    mapflattenarr.push(value)

})
console.log(mapflattenarr);
