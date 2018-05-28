export const createDOMElement = (type = 'div') => {
  const element = document.createElement(type);
  return element;
};

export default ({
  id: 'DOM',
  init(namespace) {
    namespace.element = createDOMElement(namespace.type || 'div');
  },
}); 