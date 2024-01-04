import closeFormOnSubmit from "./close-form-on-submit.js";

function closeRegistration() {
  const DOMIconCloseForm = document.getElementById('js-close-form');

  const DOMFormRegistration = document.getElementById('js-form-registration');

  closeFormOnSubmit('js-form-registration', 'js-btn-registration');

  DOMIconCloseForm.addEventListener('click', function (e) {
    e.preventDefault();
    if (DOMFormRegistration) {
      DOMFormRegistration.classList.remove('visible');
    }
  });
}

export default closeRegistration;

