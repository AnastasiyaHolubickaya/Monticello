function closeRegistration() {
  const DOMIconCloseForm = document.getElementById('js-close-form');

  const DOMFormRegistration = document.getElementById('js-form-registration');

  if (!DOMIconCloseForm) {
    throw new Error(`Element  is absent`);
  }
  DOMIconCloseForm.addEventListener('click', function (e) {
    e.preventDefault();
    if (!DOMFormRegistration) {
      throw new Error(`Element  is absent`);
    }
    DOMFormRegistration.classList.remove('visible')
  })
}

export default closeRegistration;

