const m10=document.querySelector('.m10');
const a={
  name:"mintu",
  run:()=>{
      console.log(this.name);
  }   
}
m10.addEventListener('click',()=>{
  console.log("value of this",a.run);
  
})