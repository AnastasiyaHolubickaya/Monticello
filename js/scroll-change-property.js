function scrollChangeProperty() {
  const DOMHeader = document.getElementById('js-header');

  if (!DOMHeader) {
    throw new Error(`Element with id - ${DOMHeader.id} is absent`);
  }
  window.addEventListener('scroll', function (e) {
    window.scrollY > 0
      ? DOMHeader.classList.add(`header__background-fixed`)
      : DOMHeader.classList.remove(`header__background-fixed`);
  });
}

export default scrollChangeProperty;
