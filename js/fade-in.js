document.addEventListener('DOMContentLoaded', () => {
    // Check if the page is loaded from the cache
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // If reloaded, you can call the fadeInElements function directly
        fadeInElements(0);
    } else {
        // Otherwise, add an event listener for the pageshow event
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                // If the page is being loaded from the cache
                fadeInElements(0);
            }
        });
        
        // Initial call for non-cached load
        fadeInElements(0);
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
});
