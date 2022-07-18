import Poster from "../../components/Poster";
import AnyElement from "../../elements/AnyElement";
import Listeners from "../../listeners.ts/Listeners";
import Utils from "../../utils/Utils";

class MainCatalog {

  static drawMainCatalog(): void {

    const containerMain = document.querySelector('.container__main');
    let main!: AnyElement;
    if (containerMain instanceof HTMLElement) {
      main = Utils.createAnyElement(containerMain, { type: 'main', className: ['main'] })
    }

    // sorting
    const sortData = Utils.getArrayFromStorageEx<string>('sortData');
    const sort = Utils.createAnyElement(main.element, { type: 'div', className: ['main__sort', 'sort'], innerText: 'SORT BY' });
    if (sortData.includes('name')) {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__name', 'sort__active'], innerText: 'name' });
    } else {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__name'], innerText: 'name' });
    }

    if (sortData.includes('year')) {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__year', 'sort__active'], innerText: 'year' });
    } else {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__year'], innerText: 'year' });
    }

    if (sortData.includes('category')) {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__category', 'sort__active'], innerText: 'category' });
    } else {
      Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__category'], innerText: 'category' });
    }
    Listeners.addSortOnClickEvent();

    // catalog
    Utils.createAnyElement(main.element, { type: 'div', className: ['main__catalog', 'catalog'] });
    Poster.buildPosterList();
  }
}

export default MainCatalog;
