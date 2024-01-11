const validationEmail = (value, name, id) => {
  const DOMError = document.getElementById(id);

  if (!DOMError) {
    return false;
  }

  if (!value) {
    DOMError.innerText = `${name} is required`;
    return false;
  }

  if (!value.includes('@')) {
    DOMError.innerText = `${name} must include @`;
    return false;
  }

  DOMError.innerText = '';

  return true;
};

export default validationEmail;