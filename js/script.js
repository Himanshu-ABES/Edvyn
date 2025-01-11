document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const mainContent = document.querySelector(".main");
  
    // Set how long the loader should be visible (in milliseconds)
    const displayDuration = 2000; // 2 seconds
  
    // Hide loader and show main content after the duration
    setTimeout(() => {
      // Fade out loader
      loaderWrapper.style.opacity = "0";
      loaderWrapper.style.transition = "opacity 0.5s ease";
  
      // After fade-out, remove loader and reveal main content
      setTimeout(() => {
        loaderWrapper.style.display = "none"; // Hide the loader completely
        document.body.style.overflow = "auto"; // Enable scrolling
        mainContent.style.visibility = "visible"; // Make main content visible
        mainContent.style.opacity = "1"; // Fade in main content
      }, 500); // Matches fade-out duration
    }, displayDuration);
  });
  

// GSAP Smooth Scrolling Plugin
document.documentElement.style.scrollBehavior = "smooth";

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    // Navbar animation
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Left section animation
    gsap.from(".left-content h1", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    });

    gsap.from(".left-content p", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
    });

    gsap.from(".left-content a", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 1.1
    });

    // Right section images animation (staggered)
    gsap.from(".img-container img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
});

