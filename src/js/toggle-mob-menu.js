function toggleMobMenu() {
  const DOMBurgerMenu = document.getElementById('js-menu-burger');

  const DOMItemsListNavMenu = document.querySelectorAll('.navigation__item');

  const DOMListNavMenu = document.getElementById('js-navigation-list');

  if (!DOMItemsListNavMenu) {
    throw new Error(`Elements  is absent`);
  }
  DOMItemsListNavMenu.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (!DOMListNavMenu) {
        throw new Error(`Element  is absent`);
      }
      if (DOMListNavMenu.classList.contains('mob-menu')) {

        DOMListNavMenu.classList.remove('mob-menu');

        if (!DOMBurgerMenu) {
          throw new Error(`Element  is absent`);
        }

        if (DOMBurgerMenu.classList.contains('active')) {

          DOMBurgerMenu.classList.remove('active');
        }
      }
    })
  });
}

export default toggleMobMenu;