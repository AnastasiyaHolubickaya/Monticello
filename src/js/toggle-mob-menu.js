import {DOMBurgerMenu, DOMListNavMenu} from "./get-dom-elements.js";

function toggleMobMenu() {
  if (DOMListNavMenu.classList.contains('mob-menu')) {

    DOMListNavMenu.classList.remove('mob-menu');

    if (DOMBurgerMenu.classList.contains('active')) {

      DOMBurgerMenu.classList.remove('active');
    }
  }
}

export default toggleMobMenu;