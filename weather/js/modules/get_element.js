const ELEMENT = {
  getElement: (elem, data) => {
    return (document.querySelector(elem).innerHTML = data);
  },
};
export const getElement = ELEMENT.getElement;
