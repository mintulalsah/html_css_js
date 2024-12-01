// p+c=20
// 4p+2c=56

// c=12,p=8
function calculate() {
    for (let p = 0; p <=20; p++) {
        // console.log(p);
        
        for (let c = 0; c <=20-p; c++) {
            // console.log(p,c);
            
            if (4*p+2*c===56) {
                return [p,c]
            }
           
    
        }
    } 
}

console.log(calculate());
