/**
 * React Like Lib 
 *  https://github.com/pomber/didact
 */
function anElement(element, children) {
  if (typeof(element) === 'function') {
    return element();
  } else {
    const anElement = document.createElement(element);
    anElement.innerHTML = children.join(' ');
    return anElement;
  }
}

function createElement(el, props, ...children) {
  return anElement(el, children);
}
  
export const ReactLike = {
  createElement, 
  render: (el, domEl) => {
    domEl.appendChild(el);
  }
};

  