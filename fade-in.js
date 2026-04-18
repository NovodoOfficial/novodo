function resetBodyStyles() {
  document.body.classList.remove("fade-out");
  document.body.style.opacity = "1";
}

resetBodyStyles();

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fi");

  function fadeInElements(index) {
    if (index < elements.length) {
      setTimeout(() => {
        elements[index].classList.add("animate-fade-in");
        fadeInElements(index + 1);
      }, 250);
    }
  }

  fadeInElements(0);
});
