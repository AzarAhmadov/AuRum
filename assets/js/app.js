var swiper = new Swiper(".mySwiper", {
    mousewheel: false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 45,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    breakpoints: {
        340: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

var swiper2 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 45,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    breakpoints: {
        340: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var slide = document.querySelectorAll(".slide-img");
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