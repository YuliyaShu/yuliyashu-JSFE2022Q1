import Utils from "../../utils/Utils";
import Posters from "./Posters";

class Poster {
  static drawPoster() {
    const catalog = document.querySelector('.catalog');
    if (catalog instanceof HTMLElement) {
      for (let i = 0; i < Posters.categoriesData.length; i += 1) {
        // poster img
        const poster = Utils.createAnyElement(catalog, { type: 'div', className: ['catalog__poster', 'poster']});
    
        //poster info
        Utils.createAnyElement(poster.element, { type: 'img', className: ['poster__img'], attributes: [['src', `${Posters.categoriesData[i].url}`], ['alt', 'poster image']]});
        const posterInfo = Utils.createAnyElement(poster.element, { type: 'div', className: ['poster__info']});
        const posterName = Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-name'], innerText: Posters.categoriesData[i].name.toUpperCase()});
        if ((Posters.categoriesData[i].popularity)) {
          posterName.element.classList.add('poster__info-name-after');
        }
        Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-designer-year'], innerText: `by ${Posters.categoriesData[i].designer} ${Posters.categoriesData[i].year}`});
        const category = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Category:' });
        Utils.createAnyElement(category.element, { type: 'p', innerText: Posters.categoriesData[i].category});
        const quantity = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Quantity:' });
        Utils.createAnyElement(quantity.element, { type: 'p', innerText: Posters.categoriesData[i].quantity});
        const color = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Color:' });
        Utils.createAnyElement(color.element, { type: 'p', innerText: Posters.categoriesData[i].color});
        const size = Utils.createAnyElement(posterInfo.element, { type: 'div', className: ['poster__info-diff'], innerText: 'Size:' });
        Utils.createAnyElement(size.element, { type: 'p', innerText: Posters.categoriesData[i].size});
        Utils.createAnyElement(posterInfo.element, { type: 'p', className: ['poster__info-prize'], innerText: Posters.categoriesData[i].prize });
    
        //poster button
        Utils.createAnyElement(poster.element, { type: 'button', className: ['poster__button'], innerText: 'ADD TO CART'})
    
      }
    }

  }
}

export default Poster;
