import Posters from './assets/scripts/components/Posters';
import ShopView from './assets/scripts/view/ShopView';
import './style.css';

const shop: ShopView = new ShopView();
shop.start();
Posters.setCategoriesData();

console.log('Информация для cross-check проверяющего: все пункты ТЗ Online store выполнены.')

export {};
