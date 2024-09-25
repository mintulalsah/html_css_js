const arr=[];

arr.prototype.last=function () {
    return this.length?this[this.length-1]:-1
    
}

console.log(arr.last());
