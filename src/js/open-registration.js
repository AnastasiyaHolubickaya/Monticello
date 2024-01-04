function openRegistration() {
  const DOMFormRegistration = document.getElementById('js-form-registration');

  const DOMButtonLogin = document.getElementById('js-btn-login');

  if (!DOMButtonLogin) {
    throw new Error(`Element  is absent`);
  }
  DOMButtonLogin.addEventListener('click', function (e) {
    e.preventDefault();
    if (!DOMFormRegistration) {
      throw new Error(`Element  is absent`);
    }
    DOMFormRegistration.classList.toggle('visible')
  })
}

export default openRegistration;

