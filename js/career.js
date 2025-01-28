// Select DOM elements
const title = document.querySelector('.centered-title');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer-content');
const navItems = document.querySelector('.nav-items');

// Initial animations
gsap.from(navbar, {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: 'power3.out'
});

gsap.from(title, {
  opacity: 0,
  y: 100,
  duration: 1.5,
  delay: 0.5,
  ease: 'power3.out'
});

// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const popupMenu = document.getElementById('popup-menu');

hamburgerMenu.addEventListener('click', () => {
    if (popupMenu.style.display === 'flex') {
        popupMenu.style.display = 'none';
    } else {
        popupMenu.style.display = 'flex';
    }
});

// Footer animation
gsap.from(footer, {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.5,
  ease: 'power3.out'
});

// Responsive animations for small screens
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    gsap.to(navbar, {
      opacity: 0.9,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      duration: 0.5,
      ease: 'power3.out'
    });
  } else {
    gsap.to(navbar, {
      opacity: 1,
      backgroundColor: 'transparent',
      duration: 0.5,
      ease: 'power3.out'
    });
  }
});
