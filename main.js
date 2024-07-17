console.log('main.js loaded');



// When link to page is clicked 
const nameAndTitle = document.querySelector('.name-and-title');

// Wait for 0.5 seconds before starting the animation
setTimeout(() => {
  nameAndTitle.style.opacity = 1; // Set opacity to 1 directly (no class needed)
}, 500); // Adjust delay time (in milliseconds) if needed
  
// Smooth Scrolling for Navigation Links

const navLinks = document.querySelectorAll('.menuitems a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor tag behavior

    const targetSection = document.getElementById(this.getAttribute('href').substring(1)); // Get target section ID from href attribute (remove leading "#")
    const scrollY = targetSection.offsetTop; // Get target section's vertical offset from the top

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth' // Smooth scrolling animation
    });
  });
});

// Simple Animation on Page Load

window.addEventListener('load', () => {
  const heroImage = document.querySelector('.image-container1 img'); // Select hero image

  heroImage.classList.add('fade-in'); // Add animation class (CSS definition required)
});

