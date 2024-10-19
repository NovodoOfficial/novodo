document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    function fadeInElements(index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].classList.add('animate-fade-in');
                fadeInElements(index + 1); // Call the next element
            }, 50); // Delay for each element
        }
    }

    // Check if the page was loaded from the cache
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
        const entry = navigationEntries[0];
        if (entry.type === 'reload') {
            // If reloaded, start the fade-in
            fadeInElements(0);
            return;
        }
    }

    // If loaded from the cache, use the pageshow event
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            // If the page is being loaded from the cache
            fadeInElements(0);
        }
    });

    // Initial call for non-cached load
    fadeInElements(0);
});
