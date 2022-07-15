import AnyElement from "../../elements/AnyElement";
import { PosterInterface } from "../../interfaces.ts/PosterInterface";
import Utils from "../../utils/Utils";
import Poster from "./Poster";

class Search {
  static headerSearch: AnyElement;
  static headerSearchForm: AnyElement;

  static drawSearch() {
    const container = document.querySelector('.container');
    
    if (container instanceof HTMLElement) {
      this.headerSearch = Utils.createAnyElement(container, { type: 'div', className: ['header__search'] });
    }

    this.headerSearchForm = Utils.createAnyElement(this.headerSearch.element, { type: 'div', className: ['header__search-form']});

    Utils.createAnyElement(this.headerSearchForm.element, { type: 'input', className: ['header__search-form-text'],  attributes: [['type', 'search'], ['placeholder', 'SEARCH'], ['autocomplete', 'off'], ['name', 'inputData'], ['id', 'inputDataId']] });

  }

  static startSearch(inputText: string) {
    console.log('here');
    let arrOfSearchPosters: PosterInterface[] = [];
    const start: PosterInterface[] = [];
      const currentPosters = Poster.currentPosters;
      currentPosters.reduce((res, poster) => {
        if (poster.name.toLowerCase().includes(inputText.toLowerCase())) {
          res.push(poster);
        }
        arrOfSearchPosters = res;
        return res;
      }, start)
    
      if (inputText === '') {
        arrOfSearchPosters = Poster.currentPosters;
        Poster.drawPoster(arrOfSearchPosters);
      } else {
        if (arrOfSearchPosters.length === 0) {
          const catalog = document.querySelector('.catalog');
          if (catalog) {
            catalog.innerHTML = 'There is no such posters in our catalog. Please, try another search preferences!';
          } 
        } else {
        Poster.drawPoster(arrOfSearchPosters);
        }
      }
    }
  
}

export default Search;
