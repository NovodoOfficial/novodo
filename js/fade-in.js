document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    
    // Function to remove 'animate-fade-in' class from all elements
    function removeFadeInClasses() {
        elements.forEach(element => {
            element.classList.remove('animate-fade-in');
        });
    }

    // Function to fade in elements
    function fadeInElements(index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].classList.add('animate-fade-in');
                fadeInElements(index + 1); // Call the next element
            }, 50); // Delay for each element
        }
    }
    
    removeFadeInClasses(); // First, remove any existing classes
    fadeInElements(0); // Start the fading in process
});
