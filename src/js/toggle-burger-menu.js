import {DOMBurgerMenu, DOMListNavMenu} from "./get-dom-elements.js";

function toggleBurgerMenu() {
  DOMBurgerMenu.classList.toggle('active');
  DOMListNavMenu.classList.toggle('mob-menu');
}

export default toggleBurgerMenu;