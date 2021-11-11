// banner image slider
let flag = 0;
slideShow(flag);

function controller(_x) {
  flag = flag + _x;
  slideShow(flag);
}

function slideShow(_num) {
  let slides = document.getElementsByClassName("slider__container");
  if (_num == slides.length) {
    flag = 0;
    _num = 0;
  }
  if (_num < 0) {
    flag = slides.length - 1;
    _num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[_num].style.display = "block";
}

// slideshow-container
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
