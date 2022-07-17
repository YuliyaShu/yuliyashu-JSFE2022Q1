import AnyElement from "../../elements/AnyElement";
import Listeners from "../../listeners.ts/Listeners";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";

class StartPage {
  static bodyWrapper: ShopView["bodyWrapper"];
  static drawStartPage(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;
      const newElem = Utils .createAnyElement(bodyWrapper.element, { type: 'div', className: ['start-page', 'start-page_hide']});
      Utils.createAnyElement(newElem.element, { type: 'img', attributes: [['src', './assets/images/main-2500-ready.jpg'], ['alt', 'welcome image']]});
      Utils.createAnyElement(newElem.element, { type: 'button', className: ['start-page__button'], innerText: 'GO TO SHOP'});
      
      setTimeout(function(){
        if (newElem.element) {
          newElem.element.classList.add('start-page_visible');
        }
      }, 200);
      
      Listeners.addStartBtnOnClickEvent();
  }
  
}

export default StartPage;
