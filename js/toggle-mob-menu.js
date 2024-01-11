function toggleMobileMenu() {
  const DOMBody = document.body;
  const DOMIconsMobileMenu = document.getElementById('js-icons-mobile-menu');
  const DOMNavigationList = document.getElementById('js-navigation-list');

  const toggleMenu = () => {
    DOMIconsMobileMenu?.classList.toggle('icons-mobile-menu__active');
    DOMNavigationList?.classList.toggle('mobile-menu');

    const isMenuOpen = DOMNavigationList?.classList.contains('mobile-menu');
    DOMBody?.classList.toggle('menu-open', isMenuOpen);
  };

  DOMIconsMobileMenu?.addEventListener('click', toggleMenu);

  DOMNavigationList?.addEventListener('click', () => {
    if (DOMNavigationList.classList.contains('mobile-menu')) {
      DOMNavigationList.classList.remove('mobile-menu');
      DOMBody.classList.remove('menu-open');

      if (DOMIconsMobileMenu?.classList.contains('icons-mobile-menu__active')) {
        DOMIconsMobileMenu.classList.remove('icons-mobile-menu__active');
      }
    }
  });
}

export default toggleMobileMenu;
