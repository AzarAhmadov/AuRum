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
