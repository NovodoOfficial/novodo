document.addEventListener('DOMContentLoaded', () => {
    // Check if the page was loaded from the cache
    const navigationType = performance.getEntriesByType('navigation')[0]?.type;

    if (navigationType === 'navigate' || navigationType === 'reload') {
    } else if (navigationType === 'back-forward') {
        // Open the current page in a new tab (Tab B)
        const newTab = window.open(window.location.href, '_blank');

        // Check if the new tab was successfully created
        if (newTab) {
            // Close the current tab (Tab A)
            window.close();
        } else {
            alert("Pop-up blocked. Please allow pop-ups for this site.");
        }
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
