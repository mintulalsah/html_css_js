const str="2A man, a plan, a canal: Panama_"
const formatted=str.replaceAll(/[^a-zA-z0-9]/g,"").toLowerCase()

console.log(formatted.split('').reverse().join(''));
console.log(formatted);


function isPalindrome(s) {
    let formatedstr=s.replaceAll(/[^a-zA-z0-9]/g,"").toLowerCase()
    if(formatedstr.split('').reverse().join('')===formatedstr) return true
    else return false
};

console.log(isPalindrome("9A man, a plan, a canal: Panama"));
