var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
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

function slider() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const sliderImg = document.querySelectorAll(".slide-img");

    let i = 0;

    next.addEventListener("click", () => {
        i++;
        if (sliderImg.length - 1 < i) {
            i = 0;
        }
        sliderImg.forEach((item) => {
            item.classList.remove("active");
        });
        sliderImg[i].classList.add("active");
    });

    prev.addEventListener("click", () => {
        i--;
        if (0 >= i) {
            i = 0;
        }
        sliderImg.forEach((item) => {
            item.classList.remove("active");
        });
        sliderImg[i].classList.add("active");
    });
}

slider();