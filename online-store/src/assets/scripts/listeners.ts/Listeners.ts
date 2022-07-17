import Poster from "../components/components/Poster";
import Posters from "../components/components/Posters";
import Search from "../components/components/Search";
import { PosterInCartInterface, PosterInterface } from "../interfaces.ts/PosterInterface";
import FindTarget from "../utils/FindTarget";
import Utils from "../utils/Utils";
import ShopView from "../view/ShopView";

class Listeners {
  static countName = 1;
  static countYear = 1;
  static countCategory = 1;
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

  static clickAddToCart() {
    const posters = document.querySelectorAll('.poster');
    const counter = document.querySelector('.header__bag-count');
    const cartList = Utils.getItemFromStorage('cartList');
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
          Utils.setItemToStorage('cartList', cartList);

        }
      })
    }
  }

  static clickSortButtons() {
    const sortName = document.querySelector('.sort__name');
    const sortYear = document.querySelector('.sort__year');
    const sortCategory = document.querySelector('.sort__category');


    if (sortName) {
      sortName.addEventListener('click', () => {
        const filteredPostersFromJSON = localStorage.getItem('filteredPosters');
        if (filteredPostersFromJSON) {
          const currentPosters: PosterInterface[] = JSON.parse(filteredPostersFromJSON);
            if (this.countName % 3 === 1) {
              sortName.classList.add('sort__name-up');
              sortName.classList.remove('sort__name-down');
              currentPosters.sort((a, b) => a.name.localeCompare(b.name));
            } else if (this.countName % 3 === 2) {
              sortName.classList.add('sort__name-down');
              sortName.classList.remove('sort__name-up');
              currentPosters.sort((a, b) => b.name.localeCompare(a.name));
            } else if (this.countName % 3 === 0) {
              sortName.classList.remove('sort__name-up');
              sortName.classList.remove('sort__name-down');
            }
            this.sortedPosters = currentPosters;
            Poster.drawPoster(currentPosters);
            this.countName += 1;
        }
      });
    }

    if (sortYear) {
      sortYear.addEventListener('click', () => {
        const filteredPostersFromJSON = localStorage.getItem('filteredPosters');
        if (filteredPostersFromJSON) {
          const currentPosters: PosterInterface[] = JSON.parse(filteredPostersFromJSON);
          if (this.countYear % 3 === 1) {
            sortYear.classList.add('sort__year-up');
            sortYear.classList.remove('sort__year-down');
            currentPosters.sort((a, b) => a.year.localeCompare(b.year));
          } else if (this.countYear % 3 === 2) {
            sortYear.classList.add('sort__year-down');
            sortYear.classList.remove('sort__year-up');
            currentPosters.sort((a, b) => b.year.localeCompare(a.year));
          } else if (this.countYear % 3 === 0) {
            sortYear.classList.remove('sort__year-up');
            sortYear.classList.remove('sort__year-down');
          }
          this.countYear += 1;
          this.sortedPosters = currentPosters;
          Poster.drawPoster(currentPosters);
        }
      });
    }

    if (sortCategory) {
      sortCategory.addEventListener('click', () => {
        const filteredPostersFromJSON = localStorage.getItem('filteredPosters');
        if (filteredPostersFromJSON) {
            const currentPosters: PosterInterface[] = JSON.parse(filteredPostersFromJSON);
            if (this.countCategory % 3 === 1) {
              sortCategory.classList.add('sort__category-up');
              sortCategory.classList.remove('sort__category-down');
              currentPosters.sort((a, b) => a.category.localeCompare(b.category));
            } else if (this.countCategory % 3 === 2) {
              sortCategory.classList.add('sort__category-down');
              sortCategory.classList.remove('sort__category-up');
              currentPosters.sort((a, b) => b.category.localeCompare(a.category));
            } else if (this.countCategory % 3 === 0) {
              sortCategory.classList.remove('sort__category-up');
              sortCategory.classList.remove('sort__category-down');
            }
          this.countCategory += 1;
          this.sortedPosters = currentPosters;
          Poster.drawPoster(currentPosters);
        }
      });
    }
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
