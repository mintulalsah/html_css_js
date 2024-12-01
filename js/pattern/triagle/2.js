1
12
123
1234
12345
let rowno=5;
let pattern=0;
let pattern1=0;

for (let p = 1; p <= rowno; p++) {

    for (let q = 1; q <=p; q++) {
        pattern=pattern+1;
        pattern1=pattern1+pattern
    }
    pattern1=pattern1+'\n'

}
console.log(pattern1);
