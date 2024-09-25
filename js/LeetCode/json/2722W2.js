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

    return result;
    
};

// join([
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],[
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ])
join([{"id": 1,"x": 1},{"id": 2,"x": 9}],[{"id": 3,"x": 5}, {"id": 1,"x": 1}]
)