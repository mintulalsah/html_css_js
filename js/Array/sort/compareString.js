// let a="mintu";
// let b="aman"
const unsortedArray = [
    { id: 1, name: 'banana' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'grape' },
    { id: 4, name: 'mango' },
    { id: 5, name: 'cherry' },
    { id: 6, name: 'blueberry' },
    { id: 7, name: 'orange' }
  ];
  
//who is alphbeticaly greater

// run loop to lenth of sortest string
//map over sortest array and compare ot each char to another string if b char is is eaquat then continue checking when found diffrent then compare and check if
//b char is greater than a char then a string is alphabetically greater then a else small
// 1 a is greater
///-1 means b is greater 
//0 means both equal
function sortString(a,b){

    if (a.length>b.length) {
        
        for (let i = 0; i < b.length; i++) {

            if (a.charCodeAt(i)>b.charCodeAt(i)) {
                    
                return 1
            }
            else if (a.charCodeAt(i)<b.charCodeAt(i)) {
                return -1;
            }
        }

        return 1

    }
    else if(a===b){

        return 0
    }
    else{
        for (let i = 0; i < a.length; i++) {

            if (a.charCodeAt(i)<b.charCodeAt(i)) {
                    
                return -1
            }
            else if (a.charCodeAt(i)>b.charCodeAt(i)) {
                return 1;
            }
        }

        return -1
    }
    
}

console.log(sortString('apple', 'apples'));
console.log(unsortedArray.sort((a,b)=>sortString(a.name,b.name)));

// let charA="a"
// let charB='b'
// console.log(charA.charCodeAt(0),typeof charB.charCodeAt(0));
// console.log(charA.charCodeAt(0)>charB.charCodeAt(0));
