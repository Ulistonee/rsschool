const buttonUp = document.getElementById("buttonUp");

function handleScroll() {
    const isMobileScreen = window.innerWidth <= 768;
    if (window.scrollY > 100 && isMobileScreen) {
        buttonUp.classList.add("visible");
    } else {
        buttonUp.classList.remove("visible");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
buttonUp.addEventListener("click", scrollToTop);
