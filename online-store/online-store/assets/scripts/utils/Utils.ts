import AnyElement from "../elements/AnyElement";
import ElementOptionsInterface from "../interfaces.ts/ElementOptionsInterface";

class Utils {
  static createAnyElement(
    parent: HTMLElement,
    { type,
      className = undefined,
      innerText = undefined,
      appendType = 'append',
      attributes = undefined }: ElementOptionsInterface): AnyElement {
        const elem = new AnyElement(parent, { type: type, className: className, innerText: innerText, appendType: appendType, attributes: attributes});
        elem.addProperties();
        return elem;
      }
}

export default Utils;