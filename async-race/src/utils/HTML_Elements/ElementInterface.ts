import ElementOptionsInterface from './ElementOptionsInterface';

interface ElementInterface {
  parent: HTMLElement;
  options:ElementOptionsInterface;
  element: HTMLElement;
  isVisible: boolean;
  addClassName(): this;
  addTextToElement(): this;
  addAttributes(): this;
  attachElementToDom(): this;
}

export default ElementInterface;
