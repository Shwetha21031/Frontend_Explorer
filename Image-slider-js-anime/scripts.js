// JavaScript carousel logic

let timeAutoNext = 5000;
let animationDuration = 1000; // Match with CSS transition duration

let nextDom = document.querySelector('.next');
let prevDom = document.querySelector('.prev');

let carouselDom = document.querySelector('.container');
let SliderDom = document.querySelector('.container .list');
let thumbnailBorderDom = document.querySelector('.container .thumbnails');

let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.t-item');
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let autoSlideInterval;

function startAutoSlide() {
    stopAutoSlide(); // clear any existing
    autoSlideInterval = setInterval(() => {
        showSlider('next');
    }, timeAutoNext);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextDom.onclick = () => {
    showSlider('next');
    startAutoSlide();
};

prevDom.onclick = () => {
    showSlider('prev');
    startAutoSlide();
};

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.t-item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove class after animation
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, animationDuration);
}

// Start the auto slide loop
startAutoSlide();
