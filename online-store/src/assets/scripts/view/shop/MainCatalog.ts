import AnyElement from "../../elements/AnyElement";
import ShopView from "../ShopView";

class MainCatalog {
  static bodyWrapper: ShopView["bodyWrapper"];
  static drawMainCatalog(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;
    // create elements of main catalog
  }
}

export default MainCatalog;
