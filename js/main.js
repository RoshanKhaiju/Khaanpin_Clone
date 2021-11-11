// banner image slider
let flag = 0;
slideShow(flag);

function controller(_x) {
    flag = flag + _x;
    slideShow(flag);
}

function slideShow(_num) {
    let slides = document.getElementsByClassName('slider__container');
    if (_num == slides.length) {
        flag = 0;
        _num = 0;
    }
    if (_num < 0) {
        flag = slides.length - 1;
        _num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = 'none';
    }
    slides[_num].style.display = 'block';
}