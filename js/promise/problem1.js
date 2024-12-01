console.log('Start');
setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');
// start
// end
// promise 1
// promise 2
// timeout 1 and timeout 2