// Navbar Animation
gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".navbar",
        start: "top top",  // Trigger when the top of the element reaches the top of the viewport
        once: true  // Ensures the animation runs only once
    }
});

// Footer Animation
gsap.from("footer", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: "footer",
        start: "bottom bottom",  // Trigger when the bottom of the element reaches the bottom of the viewport
        once: true
    }
});

// Program Image Animation
gsap.from(".program-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
        trigger: ".program-image",
        start: "top 80%",  // Trigger when 80% of the element is visible
        once: true
    }
});

// Course Summary (Heading and Paragraph) Animation
gsap.from(".course-summary .heading h3", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".course-summary .heading h3",
        start: "top 80%",  // Trigger when the heading is 80% visible
        once: true
    }
});
gsap.from(".course-summary .paragraph p", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.6,
    stagger: 0.2, // Each paragraph animates sequentially
    scrollTrigger: {
        trigger: ".course-summary .paragraph p",
        start: "top 80%",  // Trigger when the paragraph is 80% visible
        once: true
    }
});

// Skills Section Animation
gsap.from(".course-summary .skills p", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 1,
    stagger: 0.2, // Each skill animates sequentially
    scrollTrigger: {
        trigger: ".course-summary .skills p",
        start: "top 80%",  // Trigger when the skill is 80% visible
        once: true
    }
});
