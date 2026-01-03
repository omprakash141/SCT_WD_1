// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});