const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.click();
    });
});

var flkty = new Flickity( '.main-carousel', {
    groupCells: true
});