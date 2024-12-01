const a={name:'mintu',mobno:{mob1:"44",mob2:"34324"}}
const b=JSON.parse(JSON.stringify(a))
b.name="ranjeet"

console.log(a);
console.log(b);

