// await pauses the function: The asyncFunc is paused at 
// the await point and does not block the rest of the code from executing.
async function asyncFunc() {
    console.log('asyncFunc Start');  // 1. Synchronous code inside async function
  
    // Pausing here for 2 seconds, allowing other tasks to execute
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    console.log('asyncFunc End');  // 4. Resumes after promise resolves
  }
  
  asyncFunc(); // Calls the async function
  
  new Promise(resolve => {
    console.log('Promise Start');  // 2. Synchronous code in Promise
    resolve();
  }).then(() => {
    console.log('Promise Then');  // 3. Microtask (executed after synchronous code)
  });
  
  console.log('End of Script');  // 3. Synchronous code
  
  //output
  //asyncFunc Start
  //Promise Start
  //End of Script
  //Promise Then
  //asyncFunc End