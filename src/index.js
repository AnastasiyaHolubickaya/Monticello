import newSlider from "./js/header-slider.js";
import scrollAnimateById from "./js/scroll-animate-by-id.js";
import scrollChangeProperty from "./js/scroll-change-property.js";
import {
  DOMHeaderSliderElement,
  DOMAnchorlinks,
  DOMHeader,
  DOMBurgerMenu,
  DOMListNavMenu,
  DOMItemsListNavMenu
} from "./js/get-dom-elements.js";
import toggleBurgerMenu from "./js/toggle-burger-menu.js";
import toggleMobMenu from "./js/toggle-mob-menu.js";


if (!DOMHeaderSliderElement) {
  throw new Error(`Element with id - ${DOMHeaderSliderElement.id} is absent`);
}
// Create Header slider Swiper
newSlider(DOMHeaderSliderElement.id);

if (!DOMHeader) {
  throw new Error(`Element with id - ${DOMHeader.id} is absent`);
}
window.addEventListener('scroll', function (e) {
  // Change property header on scroll
  scrollChangeProperty(DOMHeader, 'header-fixed');
});

if (!DOMAnchorlinks) {
  throw new Error(`Element with id - ${DOMAnchorlinks.id} is absent`);
}
//scroll animation for anchor links
DOMAnchorlinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    scrollAnimateById(e.target);
  })
});

//Open/close burger-menu
if (DOMBurgerMenu && DOMListNavMenu) {
  DOMBurgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    toggleBurgerMenu();
  });
}

// Open/close mobile menu
if(DOMItemsListNavMenu){
  DOMItemsListNavMenu.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMobMenu();
    })
  });
}

