// Menu Bar Start

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
};

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    };
});

// Menu Bar End

