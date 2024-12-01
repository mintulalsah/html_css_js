
   
   //microtask queue
  //  async2()
  //promise
  //async1
  //asynch3




    async function async1() {
     await async2()
     console.log("mintu");
     
    }
 async  function async2() {
    console.log('async2');
  }

  async  function async3() {
  await async1();
    console.log('async3');
  }
  async3();
  new Promise(resolve => {
    console.log('promise1');
    resolve();
  }).then(() => {
    console.log('promise2');
  });
  
  
  //output
  //async2
  //promise1
  //mintu
  //promise2
  // /async3
 

