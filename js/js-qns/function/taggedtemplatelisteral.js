// Tagged Template Literals: Tagged templates allow you to call a function with a 
// template literal. The function receives the literal parts and the substituted 
// values as arguments, allowing for custom processing of the string.



function tag(literals, ...expressions) {
  console.log(literals);  // Array of the literal parts
  console.log(expressions);  // Array of the expression results
  console.log( typeof expressions[0]);// when pass number in tamplate lister then number chnaged ot string
  
  return literals[0] + expressions[0] + literals[1] + expressions[1];
}

const name = "Alice";
const age = 25;
const result = tag`Hello, my name is ${name} and I am ${age} years old.`;
console.log(result);  // Output: Hello, my name is Alice and I am 25 years old.