// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate Navbar
    gsap.from(".navbar", {
        y: -100,
        duration: 1,
        ease: "power2.out",
        opacity: 0,
    });

    // Animate Cards
    gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
    });

    // Hover effect on cards
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });

    // Animate Footer
    gsap.from("footer", {
        y: 100,
        duration: 1,
        ease: "power2.out",
        opacity: 0,
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
});
