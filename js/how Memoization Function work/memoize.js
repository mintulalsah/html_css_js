// Example usage
const add = (a, b) => {
    console.log(`Computing result for ${a} + ${b}`);
    return a + b;
  };


function memoise(fn) {

    var cache=new Map();
    return function (...args) {

        var key=JSON.stringify(args);
        // generate unique so that when call again check whether this key is exist in map or not 
        // if exist then return there already previously calcutaed value form chached map;
        if (cache.has(key)) {
            console.log('Returning cached result for', args);
            return cache.get(key);
          } else {
            const result = fn(...args); // Compute the result
            cache.set(key, result); // Store the result in the cache
            console.log('Computing and caching result for', args);
            return result;
          }
        
    }
}
const memoizedadd =memoise(add);
// here memoizedadd is is funtion return by memoise in which we pass argument of 1,2

console.log(memoizedadd(1, 2)); // Computing result for 1 + 2
console.log(memoizedadd(1, 2)); // Returning cached result for 1 + 2
