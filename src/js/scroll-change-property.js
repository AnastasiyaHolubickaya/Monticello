import isDomElement from "./is-dom-element.js";


function scrollChangeProperty(element, className) {
  if (!isDomElement(element)) {
    throw new Error(`${element} -  is not DOM Element!`)
  }

  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    element.classList.add(`${className}`);

  } else {
    element.classList.remove(`${className}`);
  }
}

export default scrollChangeProperty;