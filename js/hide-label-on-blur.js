function hideLabelOnBlur(inputId, labelId) {
  const DOMInput = document.getElementById(inputId);

  const DOMLabel = document.getElementById(labelId);

  if (!DOMInput) {
    throw new Error(`Element ${DOMInput} is absent`)
  }

  DOMInput.addEventListener('blur', () => {
    if (!DOMLabel) {
      throw new Error(`Element ${DOMLabel} is absent`)
    }

    DOMLabel.classList.add('hidden');
  });
}

export default hideLabelOnBlur;