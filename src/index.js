import newSlider from "./js/header-slider.js";
import scrollAnimateById from "./js/scroll-animate-by-id.js";
import scrollChangeProperty from "./js/scroll-change-property.js";
import toggleBurgerMenu from "./js/toggle-burger-menu.js";
import toggleMobMenu from "./js/toggle-mob-menu.js";
import registration from "./js/registration.js";
import  openRegistration from "./js/open-registration.js";
import closeRegistration from "./js/close-registration.js";


registration();
// Create Header slider Swiper
newSlider();
// Change property header on scroll
scrollChangeProperty();
//scroll animation for anchor links
scrollAnimateById();
//Open/close burger-menu
toggleBurgerMenu();
// Open/close mobile menu
toggleMobMenu();
//Open window with form registration
openRegistration();
// Close window with form registration
closeRegistration();
