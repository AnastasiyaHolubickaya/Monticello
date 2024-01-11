function newsSlider() {
  new Swiper(`#js-news-slider`, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.news-slider__bullets',
      clickable: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    speed: 800,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    },
  });
}

export default newsSlider;
