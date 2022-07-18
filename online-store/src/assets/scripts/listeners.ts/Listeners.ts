import Poster from "../components/components/Poster";
import Search from "../components/components/Search";
import { PosterInterface } from "../interfaces.ts/PosterInterface";
import FindTarget from "../utils/FindTarget";
import Utils from "../utils/Utils";
import ShopView from "../view/ShopView";

class Listeners {
  static sortedPosters: PosterInterface[];

  static addStartBtnOnClickEvent() {
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

  static addPosterOnClickEvent() {
    const posters = document.querySelectorAll('.poster');
    const counter = document.querySelector('.header__bag-count');
    const cartList = Utils.getArrayFromStorage('cartList');
    let targetElement: Element |null | undefined;

    for (let i = 0; i < posters.length; i += 1) {
      posters[i].addEventListener(('click'), (e) => {
        const expr = e.target;
        if (expr instanceof HTMLElement) {
          targetElement = new FindTarget(expr).find();
        }

      if (counter && targetElement) {
        const posterName = targetElement.children[1].children[0].innerHTML.toLowerCase();
            
          if (!targetElement.classList.contains('status__in-cart')) {

            if (+counter.innerHTML >= 20) {
              alert('The Cart is full!');
            } else {
              targetElement.classList.add('status__in-cart');
              cartList.push(posterName);
            }
          } else {
            targetElement.classList.remove('status__in-cart');
            cartList.splice(cartList.indexOf(posterName), 1);
          }

          counter.innerHTML = cartList.length.toString();
          Utils.setArrayToStorage('cartList', cartList);

        }
      })
    }
  }

  static addSortOnClickEvent() {
    document.querySelectorAll('.sort__button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.sort__button').forEach(buttonClass => buttonClass.classList.remove('sort__active'));
        button.classList.add('sort__active');
        let sortOrder = +Utils.getArrayFromStorage('sortData')[1];
        sortOrder = sortOrder ? 1 - Number(sortOrder) : 1;
        Utils.setArrayToStorage('sortData', [button.innerHTML, sortOrder.toString()]);
        Poster.buildPosterList();
      })
    })
  }

  static inputListener() {
    const headerSearchFormText = document.querySelector(".header__search-form-text");
      if (headerSearchFormText){
        headerSearchFormText.addEventListener('input', () => {
            if (headerSearchFormText instanceof HTMLInputElement) {
              Search.startSearch(headerSearchFormText.value);
            }
        })
      }
  }
}

export default Listeners;
