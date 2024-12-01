'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting dom element
const header=document.querySelector('.header');
// header.addEventListener('click',()=>{
//   alert("hi this side mintu")
// })

const cookiesElement=document.createElement('div');
cookiesElement.classList.add("cookie-message")
const message=document.createTextNode("mintulalasah");
// cookiesElement.textContent="When banking meetminimalist"
cookiesElement.innerHTML=`this is cookie to show on website<button class="btn">accept<button/>`

header.prepend(cookiesElement);

const btn=document.querySelector('.btn').addEventListener('click',
  ()=>{
    cookiesElement.style.display="none"
  }
)
// console.log("chil node of document",document.childNodes);
// console.log("chiud node of root node which html",document.documentElement.childNodes);
// changing style
document.documentElement.style.setProperty("--color-primary","red");
//chaning attributes


// /changinf class
const logoelement=document.querySelector('.nav__logo');
logoelement.classList.add('logowidth');

// // Event Propogation(bubbling,capturin)
// // genrate random color code
// // RGB
function genrateRandomNum() {

 return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
 
}
console.log("color code",genrateRandomNum());

const navparent=document.querySelector('.nav').addEventListener('click',function(){
  // alert("parent nav item is clicked") 
  
  // this.style.backGroundColor=genrateRandomNum()
 this.style.backgroundColor=genrateRandomNum()
console.log("nav");


},true)


const navlink=document.querySelector('.nav__link').addEventListener('click',function(){
  // alert("nav item is clicked")
  console.log("nav__link");
  // if u check with alert then first one alert will show on top and stop
  //  execution unitl u diss then another alert will pop-up
  //here if u use arrwo funtion this will will refere to parent of this funtion which is global object here

  
 this.style.backgroundColor=genrateRandomNum()

},true)
const navlinks=document.querySelector('.nav__links').addEventListener('click',function(){
  // alert("nav items list ul element is clicked")
  console.log("nav__links");

 this.style.backgroundColor=genrateRandomNum()

},true)


//smooth scrolling on nav item click
//this is not efficient way to attache event handle what if we have 1000 element
// const navlink=document.querySelectorAll('.nav__link').forEach((element)=>{

//   element.addEventListener('click',function(e) {
//     // one each lement of nav ul we have add one href link which is default behavior so 
//     //we have ot prevent this using e.preventDefualt()
//     e.preventDefault()
//     const hrefattributesId=this.getAttribute('href');
//     console.log(hrefattributesId);
//     const elementNav=document.querySelector(`${hrefattributesId}`)
//     elementNav.scrollIntoView({behavior:'smooth'})
//   })
// })

//another way using event delegation 
// const navlink=document.querySelector('.nav__links').addEventListener('click',function(e) {
//   // one each lement of nav ul we have add one href link which is default behavior so 
//   //we have ot prevent this using e.preventDefualt()
//   e.preventDefault()
//   console.log(e.currentTarget);
//   console.log(e.target);

//   const targetElement=e.target;
//   const hrefattributesId=targetElement.getAttribute('href');
//   console.log(hrefattributesId);
//   const elementNav=document.querySelector(`${hrefattributesId}`)
//   elementNav.scrollIntoView({behavior:'smooth'})
// })