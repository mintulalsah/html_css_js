const worker = new Worker('worker.js');

worker.onmessage = function(event) {
    console.log('Result from worker:', event.data);
};

worker.postMessage('start');  // Send a message to the worker to start the task
