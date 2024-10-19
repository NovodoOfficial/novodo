// Detect scroll event and toggle 'scrolled' class
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {  // Adjust the scroll position as needed
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
