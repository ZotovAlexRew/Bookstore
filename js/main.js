var swiper = new Swiper(".category-slider", {
        slidesPerView: 4,
        spaceBetween: 27,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
    nextEl: '.category-slider__button--next',
    prevEl: '.category-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
      });