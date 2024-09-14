let obj1 = { name: "John", age: 30 };
let obj2 = obj1; // obj2 now references the same object as obj1

console.log(obj1); // Output: { name: "John", age: 30 }
console.log(obj2); // Output: { name: "John", age: 30 }

obj2.age = 35; // Modify the object using obj2

console.log(obj1); // Output: { name: "John", age: 35 }
console.log(obj2); // Output: { name: "John", age: 35 }
