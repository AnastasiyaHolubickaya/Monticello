import anime from '../../node_modules/animejs/lib/anime.es.js';

function scrollAnimateById(target) {
  console.log(target);
  const targetId = target.getAttribute('href').substr(1);
  console.log(targetId);
  const DOMTargetSection = document.getElementById(targetId);
  console.log(DOMTargetSection.id);
  if (!DOMTargetSection) {
    throw new Error(`Element with id - ${DOMTargetSection.id} is absent`);
  }
  anime({
    targets: document.documentElement,
    scrollTop: DOMTargetSection.offsetTop,
    duration: 3000, // Длительность анимации в миллисекундах
    easing: 'easeInOutQuad' // Тип анимации
  });
}

export default scrollAnimateById;
