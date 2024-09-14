self.onmessage = function(event) {
    if (event.data === 'start') {
        let result = 0;
        for (let i = 0; i < 1e9; i++) {
            result += i;
        }
        postMessage(result);  // Send the result back to the main thread
    }
};
