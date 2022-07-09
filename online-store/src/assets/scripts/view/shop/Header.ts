import AnyElement from "../../elements/AnyElement";
import ShopView from "../ShopView";

class Header {
  static bodyWrapper: ShopView["bodyWrapper"];
  static drawHeader(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;
    // create elements of header
  }
}

export default Header;
