
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
  
    let counter = 0;
  
    incrementButton.addEventListener('click', () => {
      counter++;
      updateCounter();
    });
  
    decrementButton.addEventListener('click', () => {
      counter--;
      updateCounter();
    });
  
    resetButton.addEventListener('click', () => {
      counter = 0;
      updateCounter();
    });
  
    function updateCounter() {
      counterElement.textContent = counter;
    }


  const a=document.createElement('mintu');
  a.textContent="yes my name is mintu";

  
  incrementButton.appendChild(a)
  