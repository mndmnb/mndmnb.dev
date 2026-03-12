// // Mobile menu
// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobileMenu');

// hamburger.addEventListener('click', () => {
//     mobileMenu.classList.toggle('open');
// });

// // Close mobile menu on link click
// document.querySelectorAll('.mobile-link').forEach(link => {
//     link.addEventListener('click', () => {
//         mobileMenu.classList.remove('open');
//     });
// });

// // Scroll reveal
// const reveals = document.querySelectorAll('.section > *:not(.section-header)');

// reveals.forEach(el => {
//     el.classList.add('reveal');
// });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, { threshold: 0.1 });

// document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// // Active nav link on scroll
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         if (window.scrollY >= sectionTop) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.style.color = '';
//         if (link.getAttribute('href') === `#${current}`) {
//             link.style.color = 'var(--accent)';
//         }
//     });
// });