import hideLabelOnBlur from "./hide-label-on-blur.js";

function hiddenLabelFeedbackForm() {
  hideLabelOnBlur('js-name', 'name');
  hideLabelOnBlur('js-email', 'email');
  
}

export default hiddenLabelFeedbackForm;