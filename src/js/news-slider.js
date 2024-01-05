function newsSlider() {
  const DOMHeaderSliderElement = document.getElementById('js-news-slider');

  if (!DOMHeaderSliderElement) {
    throw new Error(`Element ${DOMHeaderSliderElement} is absent`);
  }
  const id = DOMHeaderSliderElement.id;

  const newsSlider = new Swiper(`#${id}`, {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      1150: {
        slidesPerView: 3,
      },
    }
  });
}

export default newsSlider;