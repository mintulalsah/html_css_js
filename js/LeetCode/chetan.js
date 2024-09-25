
let arr=[1,2,2,3,3,3,4,5,5]
let element=arr[0];
let ind=0;
for(let i=1;i<arr.length;i++){
    if(arr[i]===element){
        ind=ind+1;
        element=arr[i];
    }else{
        element=arr[i];
        if(ind){
            console.log(i)
            console.log(ind)
            console.log(arr[i-ind],arr[i])
            arr[i-ind]=arr[i-ind]+arr[i]
         arr[i]=arr[i-ind]-arr[i]
          arr[i-ind]=arr[i-ind]-arr[i]
          element=arr[i-1];
          ind=0;
        }
        
        // ind=0;//and swap happen
        
    }
   
    
    
}
console.log(arr);
