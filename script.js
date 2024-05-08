function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const incon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    incon.classList.toggle("open");
}