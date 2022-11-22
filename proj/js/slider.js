let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.button__slide--1').addEventListener('click', function () {
    offset = 0;
    sliderLine.style.right = offset + 'px';


});

document.querySelector('.button__slide--2').addEventListener('click', function () {
    offset = 1240;
    sliderLine.style.right = offset + 'px';


});

document.querySelector('.button__slide--3').addEventListener('click', function () {
    offset = 2480;
    sliderLine.style.right = offset + 'px';


});



// let offset = 0;
// const sliderLine = document.querySelector('.slider__line');

// document.querySelector('.button__slide--1').addEventListener('click', function () {
//     offset = offset + 1240;
//     if (offset > 2480) {
//         offset = 0;
//     }
//     sliderLine.style.right = offset + 'px';


// });