import anime from '../../node_modules/animejs/lib/anime.es.js';


function scrollAnimateById() {
  const DOMAnchorlinks = document.querySelectorAll('.scroll-to a');

  if (!DOMAnchorlinks) {
    throw new Error(`Element  is absent`);
  }

  DOMAnchorlinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = e.target.getAttribute('href').substr(1);

      const DOMTargetSection = document.getElementById(targetId);

      if (!DOMTargetSection) {
        throw new Error(`Element  is absent`);
      }
      anime({
        targets: document.documentElement,
        scrollTop: DOMTargetSection.offsetTop,
        duration: 3000,
        easing: 'easeInOutQuad'
      });
    })
  });
}

export default scrollAnimateById;
