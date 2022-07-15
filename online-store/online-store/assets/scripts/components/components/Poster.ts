
import { PosterInterface } from "../../interfaces.ts/PosterInterface";
import Listeners from "../../listeners.ts/Listeners";
import Utils from "../../utils/Utils";

class Poster {
  static drawPoster(arrOfPostersFilter: PosterInterface[], conditions = true) {
    const catalog = document.querySelector('.catalog');
    if (catalog) {
      catalog.innerHTML = '';
    }
    if (catalog instanceof HTMLElement) {
      arrOfPostersFilter.forEach((posterUnit: PosterInterface) => {
        if (conditions) {
          // poster img
          const poster = Utils.createAnyElement(catalog, { type: 'div', className: ['catalog__poster', 'poster']});
              
          //poster info
          Utils.createAnyElement(poster.element, { type: 'img', className: ['poster__img'], attributes: [['src', `${posterUnit.url}`], ['alt', 'poster image']]});
          const posterInfo = Utils.createAnyElement(poster.element, { type: 'div', className: ['poster__info']});
          const posterName = Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-name'], innerText: posterUnit.name.toUpperCase()});
          if ((posterUnit.popularity)) {
            posterName.element.classList.add('poster__info-name-after');
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
        
      })
      Listeners.clickAddToCart();
    }
  }
}

export default Poster;
