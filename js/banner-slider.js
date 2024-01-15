
function bannerSlider() {
  new Swiper(`#js-banner-slider`, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //keyboard
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    speed: 800,
    direction: 'vertical',
    mousewheel: true,
  });
}

export default bannerSlider;
