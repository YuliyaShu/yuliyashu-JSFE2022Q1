import Posters from './scripts/components/Posters';
import ShopView from './scripts/view/ShopView';
import './style.css';

const shop: ShopView = new ShopView();
shop.start();
Posters.setCategoriesData();

export {};
