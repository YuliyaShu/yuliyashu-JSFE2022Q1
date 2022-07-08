import AnyElement from '../elements/AnyElement';
import Utils from '../utils/Utils';


class ShopView {

    bodyWrapper!: AnyElement;

    start() {
        this.createWrapper();
        this.drawStartPage();
    }

    // createCatalogPage() {
    //   this.drawHeader();
    // }

    private createWrapper():void {
        const body = document.querySelector('body');
        if (body instanceof HTMLElement) {
          this.bodyWrapper = Utils.createAnyElement(body, { type: 'div', className: ['body__wrapper']});
        }
    }

    private drawStartPage(): void {
        const newElem = Utils.createAnyElement(this.bodyWrapper.element, { type: 'div', className: ['start-page', 'start-page_hide']});
        Utils.createAnyElement(newElem.element, { type: 'img', attributes: [['src', './assets/images/main-2500-ready.jpg'], ['alt', 'welcome image']]});
        Utils.createAnyElement(newElem.element, { type: 'button', className: ['start-page__button'], innerText: 'GO TO SHOP'});
        setTimeout(function(){
          const x = document.querySelector('.start-page');
          if (x) {
            x.classList.add('start-page_visible');
          }
        }, 200);
    }

    // private drawFooter() {}
    // private drawHeader() {},
  // drawMainCatalog() {},


}

export default ShopView;
