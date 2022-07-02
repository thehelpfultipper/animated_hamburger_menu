// Grab the menu from the DOM
const menu = document.querySelector('#hbg-menu');

// Get list of all spans
const bars = document.querySelectorAll('span');

// Detect click event on hamburger menu
menu.addEventListener('click', () => {
  // Loop through the bars list
  bars.forEach( (bar, i) => {
    i === 0 && bar.classList.toggle('top-center'); 
    i === 2 && bar.classList.toggle('bottom-center');
    i === 1 && bar.classList.toggle('turn-90');
    
  });
  menu.classList.toggle('turn-45');
});