import FindTarget from "../utils/FindTarget";
import ShopView from "../view/ShopView";

class Listeners {
  static clickStartButton() {
    const startPageButton = document.querySelector('.start-page__button');
     if (startPageButton) {
      startPageButton.addEventListener('click', () => {
        const catalogPage = new ShopView();
        const body = document.querySelector('body');
        if (body) {
          body.innerHTML = '';
        }
        catalogPage.createCatalogPage();
      })
     }
  }

  static clickAddToCart() {
    const posters = document.querySelectorAll('.poster');
    const counter = document.querySelector('.header__bag-count');
    let targetElement: Element |null | undefined;

    for (let i = 0; i < posters.length; i += 1) {
      posters[i].addEventListener(('click'), (e) => {
        const expr = e.target;
        if (expr instanceof HTMLElement) {
          targetElement = new FindTarget(expr).find();
          console.log(targetElement);
        }

      if (counter && targetElement) {
          if (!targetElement.classList.contains('status__in-cart')) {
            targetElement.classList.add('status__in-cart');
            counter.innerHTML = (+counter.innerHTML + 1).toString();
          } else {
            targetElement.classList.remove('status__in-cart');
            counter.innerHTML = (+counter.innerHTML - 1).toString();
          }

          if (+counter.innerHTML > 20) {
            counter.innerHTML = '20';
            targetElement.classList.remove('status__in-cart');
            alert('The Cart is full!');
          }
        }
      })
    }
  }
}

export default Listeners;
