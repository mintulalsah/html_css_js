'use strict';

let random_guess_num=Math.floor(Math.random()*20)
console.log(random_guess_num);
let inputvalue;
let scrorevalue=20;
console.log(document.querySelector('.message'));
const guess=document.querySelector('.guess');
const body=document.querySelector('body')
const btn_check=document.querySelector('.check');
const score=document.querySelector('.score');
const startagain=document.querySelector('.again');
const number=document.querySelector('.number');




// guess.addEventListener('input',()=>{
//     inputvalue=parseInt(guess.value);
//     console.log(guess.value);
// })

btn_check.addEventListener('click',()=>{
  
   console.log(typeof guess.value, typeof random_guess_num);
   console.log("guess",guess.value);
   console.log(random_guess_num);

   if (Number(guess.value)===random_guess_num) {

      // document.body.style.backgroundColor='green'
      body.style.backgroundColor="green"
      number.textContent=random_guess_num;

   } else {
      scrorevalue--;
      score.textContent=scrorevalue;
    alert('note matched')

   }
   
})

startagain.addEventListener('click',()=>{
   scrorevalue=0;
   random_guess_num=Math.floor(Math.random()*20);
   guess.value="";
   body.style.backgroundColor="#222"

})


