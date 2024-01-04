function closeFormOnSubmit(formId, submitButtonId) {
  const DOMForm = document.getElementById(formId);
  const DOMSubmitButton = document.getElementById(submitButtonId);

  if (!DOMForm || !DOMSubmitButton) {
    throw new Error('One or more elements are absent');
  }

  DOMForm.addEventListener('submit', function (e) {
    e.preventDefault();
    DOMForm.classList.remove('visible');
  });
}

export default closeFormOnSubmit;