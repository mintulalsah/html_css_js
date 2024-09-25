/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let result=arr1;
    function checkexistornot(item) {
       let status=false;
       result.map((resultitem,index)=>{
           if(resultitem.id===item.id){
               result[index]={...result[index],...item};
               status=true;
           }   
       })

       return status;
   }
  arr2.map((arr2item)=>{

       console.log(checkexistornot(arr2item));
       
       if (!checkexistornot(arr2item)) {
           result.push(arr2item)
       }
   })
return result.sort((a,b)=>a.id-b.id)
};