document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('url');
    const urlMap = {
        "dc": "https://www.dsc.gg/novodo",
        "yt": "https://www.youtube.com/@NovodoOfficial"
    };

    let targetUrl = redirectUrl ? urlMap[redirectUrl] || redirectUrl : null;

    if (!targetUrl) {
        document.getElementById("redirect-message").textContent = "No redirect URL was provided, try again later";
        const loadingDots = document.querySelector(".loading-dots");
        if (loadingDots) {
            loadingDots.remove();
        }
        const h1Element = document.querySelector(".loader-text h1");
        h1Element.textContent = "Failed";
        h1Element.style.textAlign = "center";
        h1Element.style.justifyContent = "center";
        document.querySelector(".loader-text p").textContent = "The redirect has failed";
        document.getElementById("back-button").style.display = "block";
        return;
    }

    document.getElementById("redirect-link").textContent = targetUrl;
    let countdown = 2.0;
    const countdownElement = document.getElementById("countdown");
    const interval = setInterval(() => {
        countdown -= 0.1;
        if (countdown <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "now";
            document.getElementById("redirect-message").textContent = `Redirecting to ${targetUrl} now`;
            window.location.href = targetUrl;
        } else {
            countdownElement.textContent = countdown.toFixed(1);
        }
    }, 100);
});
