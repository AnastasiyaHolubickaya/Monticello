function scrollChangeProperty() {
  const DOMHeader = document.getElementById('js-header');

  if (!DOMHeader) {
    throw new Error(`Element with id - ${DOMHeader.id} is absent`);
  }
  window.addEventListener('scroll', function (e) {

    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      DOMHeader.classList.add(`header-fixed`);

    } else {
      DOMHeader.classList.remove(`header-fixed`);
    }
  });

}

export default scrollChangeProperty;