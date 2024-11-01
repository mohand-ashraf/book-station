let swiperHome = new Swiper('.home-container .swiper-container' ,{
    loop: true,
    centeredSlides: true,
    slidesperView: 3,
    spaceBetween: -24,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 1,
        },
    },
});

let swiperFeatured = new Swiper('.book-boxes' ,{
    loop: true,
    centeredSlides: 'auto',
    slidesperView: 'auto',
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        },
    },
});

let swiperBook = new Swiper('.new-book' ,{
    loop: true,
    centeredSlides: 'auto',
    slidesperView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },
    },
});

let swiperCustomers = new Swiper('.customers' ,{
    loop: true,
    centeredSlides: 'auto',
    slidesperView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },
    },
});

window.onload = function () {
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    if(isDarkMode) {
        document.body.classList.add("dark-mode");
        const button = document.getElementById("toggle-button");
        button.classList.add("dark-mode");
        button.classList.remove("fa-moon");
        button.classList.add("fa-sun");
    };
};

function toggleDarkMode () {
    const button = document.getElementById("toggle-button");
    const isDarkModeEnabled = document.body.classList.contains("dark-mode");
    if(!isDarkModeEnabled){
        document.body.classList.add("dark-mode");
        button.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        button.classList.remove("fa-moon");
        button.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark-mode");
        button.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        button.classList.add("fa-moon");
        button.classList.remove("fa-sun");
    };
};

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

const searchBtn = document.getElementById("searchBtn");
const searchModel = document.getElementById("searchModel");
const closeBtn = document.querySelector(".search-close");
searchBtn.onclick = function () {
    searchModel.classList.add("open-one");
};
closeBtn.onclick = function () {
    searchModel.classList.remove("open-one");
};
searchModel.onclick = function (event) {
    if (event.target == searchModel) {
        searchModel.classList.remove("open-one");
    };
};

const userBtn = document.getElementById("userBtn");
const userModel = document.getElementById("userModel");
const closeUserBtn = document.querySelector(".user-close");
userBtn.onclick = function () {
    userModel.classList.add("open");
};
closeUserBtn.onclick = function () {
    userModel.classList.remove("open");
};
userModel.onclick = function (e) {
    if (e.target == userModel) {
        userModel.classList.remove("open");
    };
};