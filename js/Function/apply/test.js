function greet(greeting1,greeting2) {
    console.log(greeting1 +greeting2+ ', ' + this.name);
}

// const person = { name: 'Alice' };

greet.call(this, ['Hello',"hellow"]); // Output: Hello, Alice
