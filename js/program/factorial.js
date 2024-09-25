function facto(num) {
    if(num===1||num===0){
        return 1
    }
    let fac=1;
    for (let index = num; index >1; index--) {
        console.log(index);
    fac=fac*(index);
    }
    return fac;
}
console.log(facto(5));

