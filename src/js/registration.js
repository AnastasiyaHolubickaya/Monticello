import validation from "./validation.js";
import validationEmail from "./validation-email.js";


function registration() {
  const DOMForm = document.getElementById('js-registration');

  if (!DOMForm) {
    return;
  }

  DOMForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const firstName = form.get('firstName');// get value

    if (!validation(firstName, 'First name', 'js-registration-first-name-error')) {
      return;
    }

    const email = form.get('email');

    if (!validation(email, 'email', 'js-registration-email-error')) {
      return;
    }

    if (!validationEmail(email, 'email', 'js-registration-email-error')) {
      return;
    }

    const data = {
      firstName,
      email,
    };

    const dataToString = JSON.stringify(data);

    localStorage.setItem('user', dataToString);
  });

  const user = localStorage.getItem('user');

  if (user) {
    const data = JSON.parse(user);
    //console.log('data: ', data);

    const DOMFirstName = document.getElementById('js-registration-first-name');
    const DOMEmail = document.getElementById('js-registration-email');

    DOMFirstName.value = data.firstName;
    DOMEmail.value = data.email;
  }
}

export default registration;