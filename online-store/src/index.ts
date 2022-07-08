import './style.css';
import Shop from './assets/scripts/shop/Shop';

try {
  const shop: Shop = new Shop();
  // shop.start();
} catch(e) {
  // load image 404
}

export {}