import AnyElement from "../elements/AnyElement";
import ElementOptionsInterface from "../interfaces/ElementOptionsInterface";

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

  static getArrayFromStorageEx<Type>(itemName: string): Type[] {
    const itemVal = localStorage.getItem(itemName);
    if (itemVal) {
      return JSON.parse(itemVal);
    } else {
      return [];
    }
  }

  static setArrayToStorage(itemName: string, itemValue: string[] | (string | null) [][]): void {
    localStorage.setItem(itemName, JSON.stringify(itemValue));            
  }
}

export default Utils;