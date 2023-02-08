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