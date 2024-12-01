console.log("mintu lal sah".split( ' '));

function capitalizeString(string) {
    
const soln='';
const arr=[];
    for (const element of string.split(' ')) {
        // arr.push(element[0].toLocaleUpperCase()+element.slice(1))
        arr.push(element.replace(element[0],element[0].toUpperCase()))

    }

    
        return  arr.join( " ")
}

console.log(capitalizeString('mintu lal sah'));
