const ELEMENT_DATA = {
  getElementData: (elem, data, dot = ".") => {
    return (document.querySelector(elem).textContent = data + dot);
  },
};
export const getElementData = ELEMENT_DATA.getElementData;
