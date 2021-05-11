window.onscroll = function() {setSticky();};

var navbar = document.querySelector("#navbar");
var content = document.querySelector(".content")
var sticky = navbar.offsetTop;

function setSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        content.style.paddingTop = "60px";

    } else {
        navbar.classList.remove("sticky");
        content.style.paddingTop = "0px";
    }
    
}
var images = document.querySelectorAll(".image");
for(var i = 0; i < images.length; i++){
    images[i].addEventListener("click", e => {
        var lightbox = document.querySelector("#img_lightbox");
        lightbox.style.display = 'grid';
    
        lightbox.childNodes[1].src = e.target.currentSrc;
        console.log(e.target.currentSrc);
    })
}


var preview_p = document.querySelector("#preview_p")

var span = document.querySelector(".close");
span.onclick = function() { 
    img_lightbox.style.display = "none";
  }
