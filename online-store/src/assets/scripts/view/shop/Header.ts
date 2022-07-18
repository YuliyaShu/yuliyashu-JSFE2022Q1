import Search from "../../components/components/Search";
import AnyElement from "../../elements/AnyElement";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";

class Header {
  
  static bodyWrapper: ShopView["bodyWrapper"];

  static drawHeader(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;

    const header = Utils.createAnyElement(this.bodyWrapper.element, { type: 'header', className: ['header'] });

    const container = Utils.createAnyElement(header.element, { type: 'div', className: ['container'] });

    const logoLink = Utils.createAnyElement(container.element, { type: 'a', className: ['header__links'], attributes: [['href', 'https://yuliyashu-online-store.netlify.app/']] });

    Utils.createAnyElement(logoLink.element, { type: 'img', attributes: [['src', './assets/images/logo.png'], ['alt', 'logo']] });

    Search.drawSearch();
    
    const bag = Utils.createAnyElement(container.element, { type: 'div', className: ['header__bag'] });
    Utils.createAnyElement(bag.element, { type: 'img', className: ['header__bag-img'], attributes: [['src', './assets/images/bag.jpg'], ['alt', 'bag image']]});
    const count = Utils.getArrayFromStorage('cartList').length;
    Utils.createAnyElement(bag.element, {type: 'div', className: ['header__bag-count'], innerText: count.toString()});
  }
}

export default Header;
