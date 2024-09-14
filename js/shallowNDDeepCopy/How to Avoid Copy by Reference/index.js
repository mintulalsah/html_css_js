let obj1 = { name: "Alice", age: 25 };
let obj2 = { ...obj1 }; // Using the spread operator to create a shallow copy

obj2.age = 30;

console.log(obj1); // Output: { name: "Alice", age: 25 }
console.log(obj2); // Output: { name: "Alice", age: 30 }



let obj3 = { name: "Alice", package:{min:5000,max:10000} };
let obj4 = { ...obj3 }; // Using the spread operator to create a shallow copy

// obj4.package = 30;

console.log(obj3); // Output: { name: "Alice", age: 25 }
console.log(obj4); // Output: { name: "Alice", age: 30 }