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

  static getArrayFromStorage(itemName: string): string[] {
    const itemVal = localStorage.getItem(itemName);
    if (itemVal) {
      return JSON.parse(itemVal);
    } else {
      return [];
    }
  }

  static getComplexArrayFromStorage(itemName: string): string[][] {
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