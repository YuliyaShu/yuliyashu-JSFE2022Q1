import ElementOptionsInterface from "./ElementOptionsInterface";

interface ElementInterface {
  parent: HTMLElement;
  options:ElementOptionsInterface;
  element: HTMLElement;
  isVisible: boolean;
  addClassToElement(): this;
  addTextToElement(): this;
  addAttributesToElement(): this;
  attachElementToDom(): this;
  removeElementFromDom(): void;
  toggleClass(): this;
  changeClass(classNameNew: string): this;
  changeInnerText(innerTextNew: string): this;
  hide(): void;
  show(): void;
}

export default ElementInterface;
