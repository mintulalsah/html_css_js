/**------------------------


    *
   * *
  * * *
 * * * *
* * * * *


0000400000
0003050000
0020406000
0103050700
1020406080

---------------------------*/

for (let i = 4; i >=0; i--) {
    let star='';
    let start=i;
    for (let m = 0; m <= 9; m++) {
       
        if (m===start) {
        star=star.concat('*')
        start=start+2;
            
        } else {
        star=star.concat(' ')
            
        }
    }
    console.log(star);
    star=''

    

}

