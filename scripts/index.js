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
    $('.movie-description__more').on('click', function() {
        $('.movie-description__paragraph_invisible').toggleClass('movie-description__paragraph_visible');
    });
});

function replace(element){
    if ( element.textContent === 'подробнее') {
      element.textContent = 'свернуть';
    } else {
      element.textContent = 'подробнее';
    }
}
