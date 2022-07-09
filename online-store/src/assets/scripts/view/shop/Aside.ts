import AnyElement from "../../elements/AnyElement";
import ShopView from "../ShopView";

class Aside {
  static bodyWrapper: ShopView["bodyWrapper"];
  static drawAside(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;
    // create elements of aside
  }
}

export default Aside;
