
import { PosterInterface } from "../interfaces/PosterInterface";
import Listeners from "../listeners/Listeners";
import Utils from "../utils/Utils";
import Posters from "./Posters";

class Poster {
  static currentPosters: PosterInterface[];

  static drawPoster(filteredSortedPosters: PosterInterface[]) {
    const cartList = Utils.getArrayFromStorageEx<string>('cartList');
    this.currentPosters = filteredSortedPosters;
    const catalog = document.querySelector('.catalog');
    if (catalog) {
      catalog.innerHTML = '';
    }
    if (catalog instanceof HTMLElement) {
      filteredSortedPosters.forEach((posterUnit: PosterInterface) => {
        // poster img
        const posterClassName: string[] = ['catalog__poster', 'poster'];
        if (cartList.includes(posterUnit.name)) {
          posterClassName.push('status__in-cart');
        }
        const poster = Utils.createAnyElement(catalog, { type: 'div', className: posterClassName});
            
        //poster info
        Utils.createAnyElement(poster.element, { type: 'img', className: ['poster__img'], attributes: [['src', `${posterUnit.url}`], ['alt', 'poster image']]});
        const posterInfo = Utils.createAnyElement(poster.element, { type: 'div', className: ['poster__info']});
        const posterName = Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-name'], innerText: posterUnit.name.toUpperCase()});
        if ((posterUnit.popularity)) {
          posterName.element.classList.add('poster__info-name-after');
        }
        const fireIcons = document.querySelectorAll('.poster__info-name-after');
        if (fireIcons) {
          fireIcons.forEach((fireIcon) => fireIcon.setAttribute('title', 'Popular poster'));
        }
        Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-designer-year'], innerText: `by ${posterUnit.designer} ${posterUnit.year}`});
        const category = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Category:' });
        Utils.createAnyElement(category.element, { type: 'p', innerText: posterUnit.category});
        const quantity = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Quantity:' });
        Utils.createAnyElement(quantity.element, { type: 'p', innerText: posterUnit.quantity});
        const color = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Color:' });
        Utils.createAnyElement(color.element, { type: 'p', innerText: posterUnit.color});
        const size = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Size:' });
        Utils.createAnyElement(size.element, { type: 'p', innerText: posterUnit.size});
        Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-prize'], innerText: posterUnit.prize });

        //poster button
        Utils.createAnyElement(poster.element, { type: 'button', className: ['poster__button'], innerText: 'ADD TO CART'});
        }
      )
      Listeners.addPosterOnClickEvent();
    }
  }

  static buildPosterList() {
    const filterData = Utils.getArrayFromStorageEx<string[]>('filterData');
    const sortData = Utils.getArrayFromStorageEx<string>('sortData');
    const searchData = Utils.getArrayFromStorageEx<string>('searchData');

    const allPostersList: PosterInterface[] = Posters.categoriesData;
    let filteredPosters: PosterInterface[] = allPostersList.slice();
    if (filterData.length) {
      filteredPosters = filteredPosters.filter(poster => {
        return (!filterData[0].length || filterData[0].includes(poster.designer))
            && (!filterData[1].length || filterData[1].includes(poster.color))
            && (!filterData[2].length || filterData[2].includes(poster.size))
            && (!filterData[3].length || !!filterData[3] == poster.popularity)
            && (!filterData[4].length || (+poster.quantity >= +filterData[4][0] && +poster.quantity <= +filterData[4][1]))
            && (!filterData[5].length || (+poster.year >= +filterData[5][0] && +poster.year <= +filterData[5][1]));
      });

      if (searchData.length && filteredPosters.length) {
        filteredPosters = filteredPosters.filter(poster => (poster.name.toLowerCase().includes(searchData[0].toLowerCase())));
      }

      if (sortData.length && filteredPosters.length) {
        const sortField = sortData[0];
        const sortOrder = +sortData[1];
        filteredPosters.sort((a, b) => {
          switch (sortField) {
            case 'name':
              return (sortOrder) ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            case 'year':
              return (sortOrder) ? a.year.localeCompare(b.year) : b.year.localeCompare(a.year);
            case 'category':
              return (sortOrder) ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
            default:
              return 0;
          }
        })
      }

      if (filteredPosters.length === 0) {
        const catalog = document.querySelector('.catalog');
        if (catalog) {
          catalog.innerHTML = 'There is no such posters in our catalog. Please, try another preferences!';
        } 
      } else {
        this.drawPoster(filteredPosters);
      }
    }
  }
}

export default Poster;
