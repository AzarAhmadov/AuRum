const mobil = document.querySelector('.mobil');
const closeBtn = document.querySelector('.close-btn');
const openBar = document.querySelector('.bx-menu')

openBar.addEventListener('click', () => {
    mobil.style = `
    visibility: visible;
    height: 100%;
    max-height: 100%;
    opacity: 1;
    transition: linear 300ms;
    `
})

closeBtn.addEventListener('click', () => {
    mobil.style = `
    visibility: hidden;
    height:0;
    max-height: none;
    transition: linear 200ms;
    `
})

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slide = document.querySelectorAll(".slide-img");
var i = 0;

prevBtn.onclick = function () {
    slide[i].classList.remove("active");
    i--;
    if (i < 0) {
        i = slide.length - 1;
    }
    slide[i].classList.add("active");
};

nextBtn.onclick = function () {
    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
        i = 0;
    }

    slide[i].classList.add("active");
};