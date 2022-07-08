import ElementInterface from "../interfaces.ts/ElementInterface";
import ElementOptionsInterface from "../interfaces.ts/ElementOptionsInterface";

class Element implements ElementInterface {
  public parent: HTMLElement;
  public options: ElementOptionsInterface;
  public element: HTMLElement;
  isVisible: boolean;

  constructor(
    parent: HTMLElement,
    { type = 'div',
      className = undefined,
      innerText = undefined,
      appendType = 'append',
      attributes = undefined }: ElementOptionsInterface,
  ) {
    this.parent = parent;
    this.options = { type, className, innerText, appendType, attributes };
    this.element = document.createElement(this.options.type);
    this.isVisible = false;
    this.addClassToElement().addAttributesToElement().addTextToElement().attachElementToDom();
  }

  addClassToElement(): this {
    if (!this.element || !this.options.className) {
      return this;
    }

    if (typeof this.options.className === 'string') {
      this.element.classList.add(this.options.className);
    } else if (Array.isArray(this.options.className)) {
      this.options.className.forEach((e) => this.element.classList.add(e));
    }

    return this;
  }

  addAttributesToElement(): this {
    if (!this.element || !this.options.attributes) {
      return this;
    }

    this.options.attributes.forEach((e) => 
      this.element.setAttribute(e[0], e[1]));

    return this;
  }

  addTextToElement(): this {
    if (!this.element || !this.options.innerText) {
      return this;
    }

    this.element.innerText = this.options.innerText;

    return this;
  }

  attachElementToDom(): this {
    if (!this.element) {
      return this;
    }

    this.isVisible = true;
    if (this.options.appendType === 'append') {
      this.parent.append(this.element);
    } else if (this.options.appendType === 'prepend') {
      this.parent.prepend(this.element);
    }
    
    return this;
  }

  removeElementFromDom(): this {
    if (!this.element || !this.isVisible) {
      return this;
    }
    this.parent.removeChild(this.element);
    this.isVisible = false;
    return this;
  }

  toggleClass(): this {
    if (!this.element || !this.options.className) {
      return this;
    }

    if (typeof this.options.className === 'string') {
      this.element.classList.toggle(this.options.className);
    } else if (Array.isArray(this.options.className)) {
      this.options.className.forEach((e) => this.element.classList.toggle(e));
    }

    return this;
  }

  changeClass(classNameNew: string): this {
    this.element.className = classNameNew;

    return this;
  }

  changeInnerText(innerTextNew: string): this {
    this.element.innerText = innerTextNew;
    return this;
  }

  hide(): void {
    this.element.style.display = 'none';
  }

  show(): void {
    this.element.style.display = 'block';
  }
}

export default Element;
