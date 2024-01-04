function showLabelOnSubmit(formId, labelId) {
  const DOMForm = document.getElementById(formId);
  const DOMLabel = document.getElementById(labelId);

  if (!DOMForm) {
    throw new Error(`Element ${DOMForm} is absent`);
  }

  if (!DOMLabel) {
    throw new Error(`Element ${DOMLabel} is absent`);
  }

  DOMForm.addEventListener('submit', (event) => {
    event.preventDefault();

    DOMLabel.classList.remove('hidden');

  });
}

export default showLabelOnSubmit;