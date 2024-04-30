/* scroll reveal */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('section h3, .down', { origin: 'top' });
ScrollReveal().reveal('.about-content li h2, .about-content li p, .up', { origin: 'bottom' });
ScrollReveal().reveal('.right', { origin: 'left' });
ScrollReveal().reveal('.left', { origin: 'right' });


    /*typed js*/

// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Video Editor', 'Videographer', 'Photographer'],
//     typeSpeed: 70,
//     backSpeed: 30,
//     backDelay: 700,
//     loop: true
// });