import Poster from "../components/components/Poster";
import Search from "../components/components/Search";
import { PosterInterface } from "../interfaces.ts/PosterInterface";
import FindTarget from "../utils/FindTarget";
import ShopView from "../view/ShopView";

class Listeners {
  static countName = 1;
  static countYear = 1;
  static countCategory = 1;
  static sortedPosters: PosterInterface[];

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

  static clickSortButtons() {
    const sortName = document.querySelector('.sort__name');
    const sortYear = document.querySelector('.sort__year');
    const sortCategory = document.querySelector('.sort__category');
    let arrOfCurrentPostersOnPage: PosterInterface[];


    if (sortName) {
      sortName.addEventListener('click', () => {
        arrOfCurrentPostersOnPage = Poster.currentPosters;
        if (this.countName % 2) {
          arrOfCurrentPostersOnPage.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          arrOfCurrentPostersOnPage.sort((a, b) => b.name.localeCompare(a.name));
        }
        this.sortedPosters = arrOfCurrentPostersOnPage;
        Poster.drawPoster(arrOfCurrentPostersOnPage);
        this.countName += 1;
      });
    }

    if (sortYear) {
      sortYear.addEventListener('click', () => {
        arrOfCurrentPostersOnPage = Poster.currentPosters;
        if (this.countYear % 2) {
          arrOfCurrentPostersOnPage.sort((a, b) => a.year.localeCompare(b.year));
        } else {
          arrOfCurrentPostersOnPage.sort((a, b) => b.year.localeCompare(a.year));
        }
        this.countYear += 1;
        this.sortedPosters = arrOfCurrentPostersOnPage;
        Poster.drawPoster(arrOfCurrentPostersOnPage);
      });
    }

    if (sortCategory) {
      sortCategory.addEventListener('click', () => {
        arrOfCurrentPostersOnPage = Poster.currentPosters;
        if (this.countCategory % 2) {
          arrOfCurrentPostersOnPage.sort((a, b) => a.category.localeCompare(b.category));
        } else {
          arrOfCurrentPostersOnPage.sort((a, b) => b.category.localeCompare(a.category));
        }
        this.countCategory += 1;
        this.sortedPosters = arrOfCurrentPostersOnPage;
        Poster.drawPoster(arrOfCurrentPostersOnPage);
      });
    }
  }

  // static clickSearchButton() {
  //   const searchButton = document.querySelector('.header__search-form-search');
  //   if (searchButton) {
  //     searchButton.addEventListener('click', Search.startSearch);
  //   }
  // }

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
