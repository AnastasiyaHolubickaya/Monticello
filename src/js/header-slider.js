//inisialization slider Swiper
function newSlider(id) {
  if (typeof id !== 'string') {
    throw  new Error(`${id} is not a string `)
  }
  if (id === 'header-slider') {
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
      direction: 'vertical',
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // },
//   breakpoints: {
// 320: {
//   slidesPerView: 1,
// },
//     480: {
//       slidesPerView: 2,
//     },
//     920: {
//       slidesPerView: 3,
//     },
//   }
//   preloadImages: false,
//   lazy: {
//     loadOnTransitionStart: false,
//     loadPrevNext: false,
//   }
    });
  }

  if (id === 'news-slider') {

  }
}

export default newSlider;