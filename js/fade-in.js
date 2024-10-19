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
    
    fadeInElements(0); // Start the fading in process
});
