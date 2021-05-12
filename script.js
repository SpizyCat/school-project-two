var hamburgerButton = document.querySelector("#hamburger-menu-icon");
var navbar = document.querySelector("#navbar");
var content = document.querySelector(".content");

function showHamburgerMenu() {
    navbar.classList.add("open");
}

function hideHamburgerMenu() {
    navbar.classList.remove("open");
}

function toggleHamburgerMenu() {
    if (navbar.classList.contains("open")) {
        hideHamburgerMenu();
    } else {
        showHamburgerMenu();
    }
}

hamburgerButton.addEventListener("click", toggleHamburgerMenu);

function setScrolled() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
var images = document.querySelectorAll(".image");
for (var i = 0; i < images.length; i++) {
    images[i].querySelector("img").addEventListener("click", (e) => {
        var lightbox = document.querySelector("#img_lightbox");
        lightbox.style.display = "grid";

        var preview_p = document.querySelector("#preview_p");
        var parent = e.target.parentNode;
        lightbox.childNodes[1].src = parent.childNodes[1].currentSrc;
        preview_p.textContent = parent.childNodes[3].textContent;
        console.log(e.target.parentNode);
    });
}

var span = document.querySelector(".close");

if (span) {
    span.addEventListener("click", () => {
        img_lightbox.style.display = "none";
    });
}

document.addEventListener("scroll", setScrolled, {passive: true});