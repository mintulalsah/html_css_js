// const str="mintu"
// console.log(str.split('').reverse().join(''));

function ispalindrome(str) {
    // const input=str.split('').filter((item)=>item.trim()).join('');
    const input= "str".replace(',','')

    const reverse=input.split('').reverse().join('')
    console.log(input,reverse);
    
    return input===reverse
}

console.log(ispalindrome("aaa,  a"));
