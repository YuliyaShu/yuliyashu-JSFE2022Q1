import AnyElement from "../../elements/AnyElement";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";

class MainCatalog {
  static bodyWrapper: ShopView["bodyWrapper"];
  static main: AnyElement;

  static drawMainCatalog(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;

    const containerMain = document.querySelector('.container__main');
    if (containerMain instanceof HTMLElement) {
      this.main = Utils.createAnyElement(containerMain, { type: 'main', className: ['main'] })
    }
    // create elements of main catalog
  }
}

export default MainCatalog;
