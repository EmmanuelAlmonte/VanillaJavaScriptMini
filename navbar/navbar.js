const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');



navToggle.addEventListener('click', function() {
  // Toggle the height of the navbar.
  links.classList.toggle('show-links')  
})