
// let st="mintu"
// console.log(st.slice(1,-1).slice(1,-1));
// console.log(st.slice(1,-1));


function ispalindrome(str) {
    console.log(str);
    
if (str.length<=1) {
    return true
} else {
    return str[0]===str[str.length-1] && ispalindrome(str.slice(1,-1))
}
   
}

console.log(ispalindrome("3aaaa3"));
