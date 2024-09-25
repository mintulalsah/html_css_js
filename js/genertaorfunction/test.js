function* name1() {

    yield 1;
    yield 2
    
}

console.log(name1().next());
console.log(name1().next().value);

