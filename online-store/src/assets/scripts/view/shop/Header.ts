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
    function setFocus(){
      const headerSearchFormText = document.querySelector(".header__search-form-text");
      if (headerSearchFormText instanceof HTMLElement){
        headerSearchFormText.focus();
      }
    }
    setFocus();
  }
}

export default Header;
