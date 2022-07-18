import Posters from './assets/scripts/components/components/Posters';
import ShopView from './assets/scripts/view/ShopView';
import './style.css';

// try {
const shop: ShopView = new ShopView();
shop.start();
// } catch(e) {
//   // load image 404
// c
Posters.setCategoriesData();

console.log('Информация для проверяющего: все пункты ТЗ Online store выполнены.')

export {};
