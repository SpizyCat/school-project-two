window.onscroll = function() {setSticky();};

var navbar = document.querySelector("#navbar");
var content = document.querySelector(".content")
var sticky = navbar.offsetTop;

function setSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        content.style.paddingTop = "50px";

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

        var preview_p = document.querySelector("#preview_p")  
        var parent = e.target.parentNode
        lightbox.childNodes[1].src = parent.childNodes[1].currentSrc;
        preview_p.textContent = parent.childNodes[3].textContent;
        console.log(e.target.parentNode);
    })
}



var span = document.querySelector(".close");
span.onclick = function() { 
    img_lightbox.style.display = "none";
  }
