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
    const sort = Utils.createAnyElement(main.element, { type: 'div', className: ['main__sort', 'sort'], innerText: 'SORT' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__name'], innerText: 'by name' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__year'], innerText: 'by year' });
    Utils.createAnyElement(sort.element, { type: 'button', className: ['button', 'sort__category'], innerText: 'by category' });
    Listeners.clickSortButtons();

    // catalog
    Utils.createAnyElement(main.element, { type: 'div', className: ['main__catalog', 'catalog'] });
    const arrOfPosters: PosterInterface[] = Posters.categoriesData;
    Poster.drawPoster(arrOfPosters);
  }
}

export default MainCatalog;
