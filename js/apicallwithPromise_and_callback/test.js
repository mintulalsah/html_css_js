// Fetch API call
async function fetchUsingFetchAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('Data fetched using fetch API:', data);
    } catch (error) {
        console.error('Error using fetch:', error);
    }
}

// XMLHttpRequest API call
function fetchUsingXMLHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Data fetched using XMLHttpRequest:', data);
        } else if (xhr.readyState === 4) {
            console.error('Error using XMLHttpRequest:', xhr.statusText);
        }
    };
    
    xhr.send();
}

// Call both API methods
fetchUsingXMLHttpRequest();

fetchUsingFetchAPI();
