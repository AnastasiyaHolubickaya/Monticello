import bannerSlider from './js/banner-slider.js';
import scrollAnimateById from './js/scroll-animate-by-id.js';
import scrollChangeProperty from './js/scroll-change-property.js';
import toggleMobileMenu from './js/toggle-mob-menu.js';
import showMoreImages from './js/show-more-images.js';
import feedback from './js/feedback.js';
import hiddenLabelFeedbackForm from './js/hidden-label.js';
import newsSlider from './js/news-slider.js';

//validation feedback form in Contact map
feedback();

//hidden label on event blur
hiddenLabelFeedbackForm();

// Create Banner slider Swiper
bannerSlider();

// Create News slider Swiper
newsSlider();

// Header's change  background-color  on scroll
scrollChangeProperty();

//scroll animation for anchor links
scrollAnimateById();

// Open/close mobile menu
toggleMobileMenu();

//Section gallery  button
showMoreImages();
