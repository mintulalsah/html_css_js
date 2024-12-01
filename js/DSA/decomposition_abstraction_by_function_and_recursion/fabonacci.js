function fabonacciOf(x) {
   if (x==0||x===1) return 1;
   else return fabonacciOf(x-1)+fabonacciOf(x-2)
}

console.log(fabonacciOf(7));

0,1,2,3,5,8,13,21
