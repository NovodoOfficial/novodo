// Function to remove the 'fade-out' class and set body opacity to 1
function resetBodyStyles() {
    document.body.classList.remove('fade-out');
    document.body.style.opacity = '1';
}

// Call the reset function on initial load
resetBodyStyles();

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

// Add event listener to the back arrow button
document.getElementById('backArrow').addEventListener('click', () => {
    resetBodyStyles(); // Reset styles on back arrow click
    const elements = document.querySelectorAll('.fade-in');

    // Reset fade-in classes
    elements.forEach(element => {
        element.classList.remove('animate-fade-in'); // Remove the fade-in class
        element.classList.add('fade-in'); // Reapply the fade-in class for the next fade-in
    });

    // Restart the fade-in effect
    fadeInElements(0);
});
