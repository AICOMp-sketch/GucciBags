document.addEventListener('DOMContentLoaded', () => {
            // Set Hero Section Background Image
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.backgroundImage = 'url("http://googleusercontent.com/image_generation_content/2")';
            }

            // Mobile Navigation Toggle
            const hamburger = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    hamburger.querySelector('i').classList.toggle('fa-bars');
                    hamburger.querySelector('i').classList.toggle('fa-times'); // Change icon
                });

                // Close nav when a link is clicked (for smooth scroll)
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            hamburger.querySelector('i').classList.remove('fa-times');
                            hamburger.querySelector('i').classList.add('fa-bars');
                        }
                    });
                });
            }

            // Intersection Observer for section animations
            const sections = document.querySelectorAll('main section');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% of the section is visible
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.filter = 'blur(0px)';
                        // observer.unobserve(entry.target); // Uncomment to animate only once per page load
                    } else {
                        // Optional: Reset state when out of view, for re-animation on scroll back
                        // entry.target.style.opacity = 0;
                        // entry.target.style.transform = 'translateY(20px)';
                        // entry.target.style.filter = 'blur(5px)';
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                if (!section.classList.contains('hero-section')) { // Exclude hero as it has its own animation
                    section.style.opacity = 0;
                    section.style.transform = 'translateY(20px)';
                    section.style.filter = 'blur(5px)';
                    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out';
                    sectionObserver.observe(section);
                }
            });
        });