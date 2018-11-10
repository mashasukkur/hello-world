//javascript.js

var slideIndex = 0;
showSlides();
function showSlides() {
    console.log('Hello', slideIndex)
    var slides = document.getElementsByClassName("myimages");
    //var slides = [img1, img2, img3]
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    console.log(slideIndex);
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}
