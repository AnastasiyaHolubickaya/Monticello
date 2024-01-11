import validation from './validation.js';
import validationEmail from './validation-email.js';

function feedback() {
  const DOMForm = document.getElementById('js-feedback');

  if (!DOMForm) {
    return;
  }

  DOMForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const firstName = form.get('name'); // get value

    if (!validation(firstName, 'name', 'js-feedback-first-name-error')) {
      return;
    }

    const email = form.get('email');

    if (!validation(email, 'email', 'js-feedback-email-error')) {
      return;
    }

    if (!validationEmail(email, 'email', 'js-feedback-email-error')) {
      return;
    }

    DOMForm.reset();
    //const formData = new FormData(DOMForm);
    // for (const value of formData.values()) {
    //   console.log(value);
    //   formData.delete(value);
    // }

    //document.getElementById('js-contacts')?.classList.add('hidden');
  });
}

export default feedback;
