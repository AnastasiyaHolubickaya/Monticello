function newSlider() {
  const DOMHeaderSliderElement = document.getElementById('js-header-slider');

  if (!DOMHeaderSliderElement) {
    throw new Error(`Element with id - ${id} is absent`);
  }
  const id = DOMHeaderSliderElement.id;

  const headerSlider = new Swiper(`#${id}`, {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },
    //grabCursor: true,
    slideToClickedSlide: true,
    //keyboard
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    //mouse wheel control
    // mousewheel: {
    //   sensitivity: 1,
    //   //eventsTarget: ".image-slider"
    // },
    autoHeight: true,
    slidesPerView: 1,
    freeMode: true,
    // autoplay: {
    //   delay: 1000,
    //   stopOnLastSlide: true,
    //   disableOnInteraction: false,
    //
    // },
    speed: 800,

    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
  breakpoints: {
320: {
  slidesPerView: 1,
},
    480: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
  }
  });
}

export default newSlider;