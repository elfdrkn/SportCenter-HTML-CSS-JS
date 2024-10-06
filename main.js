//N AVBAR SECTION
// Selecting Navbar
const navbar = document.querySelector('.nav-scroll');

// When scroll, change background color
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent'); // Scroll 
  } else {
    navbar.classList.add('transparent'); // Transparent
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


  /* OUR CLASSES  */
  /* With this function, we choose 'onclick' item */
  function showContent(contendId) {

    event.preventDefault();
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    const activeSection = document.getElementById(contendId);
      if (activeSection) {
        activeSection.style.display = 'flex';
      }
    
  }

  /* BMI SECTION */
  function calculateBMI() {
    // We are collecting height and weight data from the user
    const height = document.getElementById('height').value / 100; // cm to m
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) { // If valid height and weight ; 
        const bmi = weight / (height * height); // BMI 
        const indicator = document.getElementById('bmi-indicator');
        const bmiImage = document.getElementById('bmi-image');

        // Determine the position of the arrow based on the BMI result
        if (bmi < 18.5) {
            indicator.style.left = '15%'; // Left bottom
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            indicator.style.left = '30%'; 
        } else if (bmi >= 25 && bmi <= 29.9) {
            indicator.style.left = '50%'; // Middle
        } else if (bmi >= 30 && bmi <= 34.9) {
            indicator.style.left = '65%'; 
        } else if (bmi >= 35) {
            indicator.style.left = '80%'; // Right bottom
        }
    }
}


