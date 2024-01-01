function toggleBurgerMenu() {

  const DOMBurgerMenu = document.getElementById('js-menu-burger');

  const DOMListNavMenu = document.getElementById('js-navigation-list');

  if (!DOMBurgerMenu || !DOMListNavMenu) {
    throw new Error(`Elements  is absent`);
  }
  DOMBurgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    DOMBurgerMenu.classList.toggle('active');
    DOMListNavMenu.classList.toggle('mob-menu');
  });

}

export default toggleBurgerMenu;