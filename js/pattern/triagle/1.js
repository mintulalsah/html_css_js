1
12
123
1234
12345
let rowno=5;
let pattern="";
for (let p = 1; p <= rowno; p++) {

    for (let q = 1; q <= p; q++) {
        pattern+=q;
    }
    pattern=pattern+'\n'

}
console.log(pattern);
