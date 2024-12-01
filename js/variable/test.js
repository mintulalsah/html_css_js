var a=10;
function change() {
    // let a=1880;
    a=90;// if no variable as is define din local scop then he lok in out scope if found then chnage that 
    //variable a to 90
}
change();
console.log(a);
// local scop e varaible can not modifyglobal varibale vaue local varibale value is create another block of memory inside global scope a
//and get cleared once funtion is called