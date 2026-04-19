// Portfolio 2026 — Interactive Enhancements

(function() {
    'use strict';

    // ----- Custom Magnetic Cursor -----
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;
        let dotSpeed = 0.2;
        let ringSpeed = 0.1;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Dot follows mouse directly with easing
            dotX += (mouseX - dotX) * dotSpeed;
            dotY += (mouseY - dotY) * dotSpeed;

            // Ring follows dot with more inertia
            ringX += (dotX - ringX) * ringSpeed;
            ringY += (dotY - ringY) * ringSpeed;

            cursorDot.style.left = `${dotX}px`;
            cursorDot.style.top = `${dotY}px`;
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            requestAnimationFrame(animateCursor);
        }

        // Start animation
        animateCursor();

        // Hide cursor on touch devices
        if ('ontouchstart' in window) {
            cursorDot.style.display = 'none';
            cursorRing.style.display = 'none';
        }
    }

    // ----- Scroll Reveal Animations -----
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with class 'reveal'
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Add 'reveal' class to sections for staggered animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const children = section.children;
        Array.from(children).forEach((child, index) => {
            if (!child.classList.contains('container') && !child.classList.contains('section-title')) {
                child.classList.add('reveal');
                child.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    });

    // ----- Smooth Scroll for Anchor Links -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ----- Header Scroll Effect -----
    const header = document.querySelector('.header');
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                header.style.transform = 'translateY(0)';
                return;
            }
            if (currentScroll > lastScroll) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }

    // ----- Project Hover Enhancement -----
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.zIndex = '10';
        });
        project.addEventListener('mouseleave', () => {
            project.style.zIndex = '';
        });
    });

    // ----- Marquee Pause on Hover -----
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        marqueeTrack.addEventListener('mouseenter', () => {
            marqueeTrack.style.animationPlayState = 'paused';
        });
        marqueeTrack.addEventListener('mouseleave', () => {
            marqueeTrack.style.animationPlayState = 'running';
        });
    }

    // ----- Year in Footer -----
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log('Portfolio 2026 — Interactive scripts loaded.');
})();