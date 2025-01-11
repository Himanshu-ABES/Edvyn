// GSAP basic animation setup
gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  });
  
  // Animating main content header and sub-header
  gsap.from('.main-content h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 0.5
  });
  
  gsap.from('.main-content h3', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 1
  });
  
  // Founder Section Animation
  gsap.from('.founder h3', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 1.5
  });
  
  gsap.from('.founder h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 1.8
  });
  
  gsap.from('.founder img', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    delay: 2.1
  });
  
  // Mission Section Animation (Purpose Heading & Paragraph)
  gsap.from('.mission .heading h3', {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power4.out',
    delay: 2.5
  });
  
  gsap.from('.mission .paragraph h2', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power4.out',
    delay: 2.8
  });
  
  gsap.from('.mission .paragraph p', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power4.out',
    delay: 3.2,
    stagger: 0.3
  });
  
  // Footer Animation
  gsap.from('.footer-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 3.5
  });
  