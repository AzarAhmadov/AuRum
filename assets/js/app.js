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

const carrer = document.querySelectorAll('.carrer-top');
const carrerItem = document.querySelectorAll('.carrer-item');
const carrerBottomContent = document.querySelectorAll('.carrer-text');
const arrow = document.querySelectorAll('.bx-chevron-right')

carrer.forEach((el, item) => {
    el.addEventListener('click', () => {
        carrerBottomContent[item].classList.toggle('active')
        arrow[item].classList.toggle('active')
    })
})

arrow.forEach((el, item) => {
    el.addEventListener('click', () => {
        carrerBottomContent[item].classList.toggle('active')
        arrow[item].classList.toggle('active')
    })
})

const current_year = document.querySelector('.current-year');
const year = document.querySelector('.year');
const yearInner = document.querySelectorAll('.year-txt');

current_year.innerHTML = '2023 <i class="fa-solid fa-angle-down"></i>'

yearInner.forEach((el, item) => {
    el.addEventListener('click', () => {
        let currentYear = el.innerHTML
        current_year.innerHTML = currentYear + '<i class="fa-solid fa-angle-down"></i>'
        year.classList.remove('active')
    })
})


current_year.addEventListener('click', () => {
    year.classList.toggle('active')
})

const cv = document.querySelector('.cv-area');

cv.addEventListener('click', () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        let files = Array.from(input.files);
        console.log(files);
    };
    input.click();
})