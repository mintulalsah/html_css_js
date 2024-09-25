const a={name:'dekhi vellyt'}
function greeting(...arg) {
    console.log(this.name,arg);
    
}


const bb=greeting.bind(1,3,2);


console.log(a);
bb()
