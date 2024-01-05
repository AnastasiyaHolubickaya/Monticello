function headerSlider() {
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
    slideToClickedSlide: true,
    //keyboard
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    freeMode: true,
    speed: 800,
    direction: 'vertical',
  });
}

export default headerSlider;