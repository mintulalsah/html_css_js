
function callapi(url,callback){
    setTimeout(() => {
    callback("mintu");
        
    }, 4000);
    const a=fetch('https://jsonplaceholder.typicode.com/todos/1').json();

}

function callback(callback) {
    
    console.log('api response',callback);
    
}

callapi("ss",callback);

