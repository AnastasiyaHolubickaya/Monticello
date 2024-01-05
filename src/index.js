import headerSlider from "./js/header-slider.js";
import scrollAnimateById from "./js/scroll-animate-by-id.js";
import scrollChangeProperty from "./js/scroll-change-property.js";
import toggleBurgerMenu from "./js/toggle-burger-menu.js";
import toggleMobMenu from "./js/toggle-mob-menu.js";
import registration from "./js/registration.js";
import  openRegistration from "./js/open-registration.js";
import closeRegistration from "./js/close-registration.js";
import showMoreImages from "./js/show-more-images.js";
import feedback from "./js/feedback.js";
import hiddenLabelFeedbackForm from "./js/hidden-label.js";
import newsSlider from "./js/news-slider.js";



//Open  form registration
openRegistration();

// validation registration form in Header
registration();

// Close  form registration
closeRegistration();

//validation feedback form in Contact map
feedback();

//hidden label on event blur
hiddenLabelFeedbackForm();

// Create Header slider Swiper
headerSlider();
newsSlider();
// Header's change  background-color  on scroll
scrollChangeProperty();

//scroll animation for anchor links
scrollAnimateById();

//Open/close burger-menu
toggleBurgerMenu();

// Open/close mobile menu
toggleMobMenu();

//
showMoreImages();
