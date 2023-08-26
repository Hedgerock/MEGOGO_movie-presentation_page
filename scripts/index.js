$(function() {
    $('.search__button').on('click', function() {
        $('.search__field').toggleClass('search__field_visible');
        $('.search__filter').toggleClass('search__filter_visible');
        $('.search__close-button').toggleClass('search__close-button_visible');
    });
    $('.search__close-button').on('click', function() {
        $('.search__field').toggleClass('search__field_visible');
        $('.search__filter').toggleClass('search__filter_visible');
        $('.search__close-button').toggleClass('search__close-button_visible');
    });
    $('.header-language-sector__title').on('click', function() {
        $('.header-list_on-click').toggleClass('header-list_visible');
        $('.header-language-sector__title').toggleClass('header-language-sector__title_active');
    });
    $('.volume-button-off').on('click', function() {
        $('.volume-button-off').toggleClass('volume-button__onsound');
    })
    $('.movie-description__more').on('click', function() {
        $('.movie-description__paragraph_invisible').toggleClass('movie-description__paragraph_visible');
    });
    $('.contacts__button').on('click', function() {
        $('.contacts-list').toggleClass('contacts-list_visible');
        $('.contacts__button').toggleClass('contacts__button_active');
    })
});

function replace(element){
    if ( element.textContent === 'подробнее') {
      element.textContent = 'свернуть';
    } else {
      element.textContent = 'подробнее';
    }
}

const images = document.querySelectorAll('.slider-content-container');
const sliderBlock = document.querySelector('.slider-content');
let count = 0;
let width;
function init() {
    width = document.querySelector('.slider-content-container').offsetWidth;
    sliderBlock.style.width = width*images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
    rollSlider();
}
window.addEventListener('resize', init);
init();
document.querySelector('.slider-swiper__button_right').addEventListener('click', function() {
    count++;
    if(count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-swiper__button_left').addEventListener('click', function() {
    count--;
    if(count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderBlock.style.transform = 'translate(-'+count * width + 'px)';
}