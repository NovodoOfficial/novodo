window.addEventListener('pageshow', (event) => {
    const elements = document.querySelectorAll('.fade-in');
    
    function fadeInElements(index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].classList.add('animate-fade-in');
                fadeInElements(index + 1); // Call the next element
            }, 50); // Delay for each element
        }
    }
    
    // Always reset the classes when the page is shown
    elements.forEach(el => {
        el.classList.remove('animate-fade-in'); // Reset for fade-in
    });

    fadeInElements(0); // Start the fading in process
});
