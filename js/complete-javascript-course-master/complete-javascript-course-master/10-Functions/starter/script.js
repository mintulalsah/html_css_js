// 'use strict';
const buy=document.querySelector('.buy');
const a={
  name:"mintu",
  
  run:function(){
      console.log(this.name);
  },

}
// a.planes=200;
// a.buyplane=function(){

//     console.log(this)
// a.planes++;
// console.log(this.planes);


// }
// a.run()
// buy.addEventListener('click',a.buyplane.bind(a))

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll=document.querySelector('.poll');
const pollQuestion={
    question:"What is your favourite programming language?",
    options:{
        '0':"js",
        '1':"python",
        '2':"rust",
        '3':'c++'
    },
    polllist:Array(4).fill(0)
}

pollQuestion.registerNewAnswer=function(){
    const questionArray=Object.getOwnPropertyNames(this.options);
    console.log(questionArray);
    
    
    const ansInput=prompt(`hi mintu answer thi squestion\n ${this.question}\n${
    parseInt(questionArray[0])+": "+this.options[questionArray[0]]
    }`)

    console.log("selected answer",ansInput);
    if(ansInput){
        this.polllist[parseInt(ansInput)]+=1
        pollQuestion.displayResults.call(pollQuestion)

    }
    else if(ansInput>3){
        alert("enter valid input [0-3]")
    }
    else{

    }
    
}

pollQuestion.displayResults=function(type="Array"){

    type==="Array"?console.log("this is answers in array",this.polllist):console.log("this is answers in string",...this.polllist);
    
    
}
poll.addEventListener('click',pollQuestion.registerNewAnswer.bind(pollQuestion))
