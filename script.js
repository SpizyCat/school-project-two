var hamburgerButton = document.querySelector("#hamburger-menu-icon");
var navbar = document.querySelector("#navbar");

// Hamburger menu
function toggleHamburgerMenu() {
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
    } else {
        navbar.classList.add("open");
    }
}

hamburgerButton.addEventListener("click", toggleHamburgerMenu);

// Lightbox
var images = document.querySelectorAll(".image");
for (var i = 0; i < images.length; i++) {
    images[i].querySelector("img").addEventListener("click", (e) => {
        var lightbox = document.querySelector("#img_lightbox");
        lightbox.style.display = "grid";

        var preview_p = document.querySelector("#preview_p");
        var parent = e.target.parentNode;
        lightbox.childNodes[1].src = parent.childNodes[1].currentSrc;
        preview_p.textContent = parent.childNodes[3].textContent;
    });
}

// Close Lightbox
var span = document.querySelector(".close");
if (span) {
    span.addEventListener("click", () => {
        img_lightbox.style.display = "none";
    });
}
