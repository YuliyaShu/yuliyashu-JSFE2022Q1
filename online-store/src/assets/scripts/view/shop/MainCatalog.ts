import Poster from "../../components/components/Poster";
import Posters from "../../components/components/Posters";
import AnyElement from "../../elements/AnyElement";
import { PosterInterface } from "../../interfaces.ts/PosterInterface";
import Listeners from "../../listeners.ts/Listeners";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";

class MainCatalog {

  static drawMainCatalog(): void {

    const containerMain = document.querySelector('.container__main');
    let main!: AnyElement;
    if (containerMain instanceof HTMLElement) {
      main = Utils.createAnyElement(containerMain, { type: 'main', className: ['main'] })
    }

    // sorting
    const sort = Utils.createAnyElement(main.element, { type: 'div', className: ['main__sort', 'sort'], innerText: 'SORT BY' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__name'], innerText: 'name' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__year'], innerText: 'year' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__button', 'sort__category'], innerText: 'category' });
    Listeners.addSortOnClickEvent();

    // catalog
    Utils.createAnyElement(main.element, { type: 'div', className: ['main__catalog', 'catalog'] });
//    const arrOfPosters: PosterInterface[] = Posters.categoriesData;
//    Poster.drawPoster(arrOfPosters);
    Poster.buildPosterList();
  }
}

export default MainCatalog;
