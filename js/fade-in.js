document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('pageshow', (event) => {
        // Check if the page is loaded from cache
        if (event.persisted) {
            console.log('Page loaded from cache, reloading...');
            window.location.reload(); // Reload the page
        } else {
            console.log('Page loaded normally.');

            const elements = document.querySelectorAll('.fade-in');
            
            if (elements.length === 0) {
                console.warn('No elements with class .fade-in found.');
                return;
            }

            function fadeInElements(index) {
                if (index < elements.length) {
                    setTimeout(() => {
                        elements[index].classList.add('animate-fade-in'); // Add animation class
                        console.log(`Fading in element ${index}:`, elements[index]);
                        fadeInElements(index + 1); // Call the next element
                    }, 50); // Delay for each element
                }
            }

            // Reset classes before applying the animation
            elements.forEach(el => {
                el.classList.remove('animate-fade-in'); // Ensure the animation class is removed first
                el.style.opacity = '0'; // Reset opacity directly to ensure it starts from hidden
            });

            fadeInElements(0); // Start the fading in process
        }
    });
});
