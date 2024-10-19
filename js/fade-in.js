document.addEventListener('DOMContentLoaded', () => {
    // Check if the page was loaded from the cache
    const navigationType = performance.getEntriesByType('navigation')[0]?.type;

    if (navigationType === 'navigate' || navigationType === 'reload') {
    } else if (navigationType === 'back-forward') {
        // Page loaded from the cache, reload
        location.reload(true);
    }

    const elements = document.querySelectorAll('.fade-in');
    
    function fadeInElements(index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].classList.add('animate-fade-in');
                fadeInElements(index + 1); // Call the next element
            }, 50); // Delay for each element
        }
    }
    
    fadeInElements(0); // Start the fading in process
});
