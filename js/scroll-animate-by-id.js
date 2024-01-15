import anime from '../node_modules/animejs/lib/anime.es.js';

function scrollAnimateById() {
  const linksArray = [...document.getElementsByClassName('navigation__link')];

  linksArray?.forEach((link) => {
    link.addEventListener('click', function (e) {
      const DOMTargetSection = document.getElementById(
        e.target.getAttribute('href').substr(1)
      );

      anime({
        targets: document.documentElement,
        scrollTop: DOMTargetSection.offsetTop,
        duration: 3000,
        easing: 'easeInOutQuad',
      });
    });
  });
}

export default scrollAnimateById;
