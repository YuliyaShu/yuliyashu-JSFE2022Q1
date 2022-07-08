import ShopView from '../view/ShopView';

class Shop {
    view: ShopView;
    constructor() {
        this.view = new ShopView();
    }

    // start(): void {
    //     this.view.drawBody();
    //     this.view.drawMainStart();
    // }
}

export default Shop;