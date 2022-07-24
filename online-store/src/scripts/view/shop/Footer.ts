import AnyElement from "../../elements/AnyElement";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";

class Footer {
  static bodyWrapper: ShopView["bodyWrapper"];

  static drawFooter(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;

    const footer = Utils.createAnyElement(this.bodyWrapper.element, { type: 'footer', className: ['footer']});

    const container = Utils.createAnyElement(footer.element, { type: 'div', className: ['container'] });

    Utils.createAnyElement(container.element, { type: 'a', className: ['footer__links'], innerText: 'YuliyaShu july 2022', attributes: [['href', 'https://github.com/YuliyaShu']] })
    
    const schoolLink = Utils.createAnyElement(container.element, { type: 'a', className: ['footer__links'], attributes: [['href', 'https://rs.school/']] });
    
    Utils.createAnyElement(schoolLink.element, { type: 'img', attributes: [['src', './assets/images/rs_school_js.svg'], ['alt', 'rsschool-logo']]});
  }
}

export default Footer;
