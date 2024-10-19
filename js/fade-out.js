document.addEventListener('DOMContentLoaded', () => {
    // Select all links
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetUrl = link.getAttribute('href'); // Get the URL from the link

            // Add the fade-out class to the body
            document.body.classList.add('fade-out');

            // Redirect to the target URL after the fade-out transition
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Match the duration of the CSS transition
        });
    });
});
