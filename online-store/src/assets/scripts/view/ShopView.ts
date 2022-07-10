import AnyElement from '../elements/AnyElement';
import Utils from '../utils/Utils';
import Aside from './shop/Aside';
import Footer from './shop/Footer';
import Header from './shop/Header';
import MainCatalog from './shop/MainCatalog';
import StartPage from './shop/StartPage';


class ShopView {
    bodyWrapper!: AnyElement;

    start() {
        this.createWrapper();
        StartPage.drawStartPage(this.bodyWrapper);
    }

    createCatalogPage() {
      this.createWrapper();
      Header.drawHeader(this.bodyWrapper);
      Aside.drawAside(this.bodyWrapper);
      MainCatalog.drawMainCatalog(this.bodyWrapper);
      Footer.drawFooter(this.bodyWrapper);
    }

    private createWrapper():void {
      const body = document.querySelector('body');
      if (body instanceof HTMLElement) {
        this.bodyWrapper = Utils.createAnyElement(body, { type: 'div', className: ['body__wrapper']});
      }
    }
}

export default ShopView;
