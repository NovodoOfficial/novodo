function resetBodyStyles() {
    document.body.classList.remove('fade-out');
    document.body.style.opacity = '1';
}

resetBodyStyles();

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    function fadeInElements(index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].classList.add('animate-fade-in');
                fadeInElements(index + 1);
            }, 50);
        }
    }

    fadeInElements(0);
});

document.getElementById('backArrow').addEventListener('click', () => {
    resetBodyStyles();
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        element.classList.remove('animate-fade-in');
        element.classList.add('fade-in');
    });

    fadeInElements(0);
});
