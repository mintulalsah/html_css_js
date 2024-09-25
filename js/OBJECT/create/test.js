
const employee={
    name:"mintulal"
}
//create metho sfrom object create new object and inherit properties form anothe robejct and use as prototype chain
//means if u try to access any properties if its not exiti in current object it will check going upword in all prototype chain
const employee1=Object.create(employee);

delete employee1.name// delete method only delete there object properties not those are inheritate using prototype

console.log(employee1.name)