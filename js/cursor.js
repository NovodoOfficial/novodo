const follower = document.getElementById('follower');
const cursorMarker = document.getElementById('cursorMarker');

let followerX = 0;
let followerY = 0;

let mouseX = 0;
let mouseY = 0;

function initializePosition(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    followerX = mouseX;
    followerY = mouseY;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    cursorMarker.style.left = `${mouseX}px`;
    cursorMarker.style.top = `${mouseY}px`;

    document.removeEventListener('mousemove', initializePosition);

    follower.style.opacity = '0.5';
    cursorMarker.style.opacity = '1';
}

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorMarker.style.left = `${mouseX}px`;
    cursorMarker.style.top = `${mouseY}px`;
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.015;
    followerY += (mouseY - followerY) * 0.015;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(animateFollower);
}

document.addEventListener('mousemove', initializePosition);

animateFollower();