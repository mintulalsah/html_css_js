const months = ['Jan', 'March', 'April', 'June','mintyu',"kask"];
// months.splice(1, 0, 'Feb');
// Inserts at index 1
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(2, 3, 'May');
// Replaces 1 element at index 4
// console.log(months);
// console.log(months.slice(2,-1));

console.log(months.reduce((a,i)=>a,''));


// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
