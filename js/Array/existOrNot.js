let result=[3,2,54,3]
function checkexistornot(item) {
    let status=false;
    result.map((resultitem,index)=>{
        if(resultitem===item){
           status= true;
        }
          
    })

    return console.log(status);
    ;
}

[2,13,22,54].forEach((item)=>checkexistornot(item))
