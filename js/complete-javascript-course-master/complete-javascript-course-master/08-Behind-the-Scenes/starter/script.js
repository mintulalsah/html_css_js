'use strict';
console.log(this);

function checkthis() {
    console.log(this);
    
}
const checkthisinArrow=(rr)=>{
console.log(this);

}
checkthis();
checkthisinArrow();

const mintiObj={
    DOB:1997,
    calAge:function(couurentDate){
        console.log(couurentDate-this.DOB);
        
    }
}

const Aman={
    DOB:1999
}

Aman.calAge=mintiObj.calAge;
mintiObj.calAge(2024);
Aman.calAge(2024);