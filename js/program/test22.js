console.log("sou");
let input="A2B2C1";
let alphbet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let arr=[]

function name(params) {
    
}
let countstring="";
let obj={char:'',count:0}

for (let index = 0; index < input.length; index++) {
   if (alphbet.includes(input[index])) {
    console.log('true');
    obj={char:'',count:0}
    obj.char=input[index];
    arr.push(obj)
   countstring=""
    
   }
   else{
    countstring=countstring+input[index];
    obj.count=parseInt(countstring)

   }

   console.log(countstring);
   
}

console.log(arr);
let finalstring="";
arr.map((item)=>{
let stringis=item.char;
    
    for (let index = 0; index < item.count-1; index++) {
        stringis=stringis+stringis;        

    }
    console.log(stringis);

 finalstring=finalstring+stringis;
})

console.log(finalstring);
