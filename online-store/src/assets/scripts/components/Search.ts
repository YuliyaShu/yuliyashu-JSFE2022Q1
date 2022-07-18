import AnyElement from "../elements/AnyElement";
import Listeners from "../listeners.ts/Listeners";
import Utils from "../utils/Utils";

class Search {
  static headerSearch: AnyElement;
  static headerSearchForm: AnyElement;
  static searchElement: HTMLInputElement;

  static drawSearch() {
    const container = document.querySelector('.container');
    
    if (container instanceof HTMLElement) {
      this.headerSearch = Utils.createAnyElement(container, { type: 'div', className: ['header__search'] });
    }

    this.headerSearchForm = Utils.createAnyElement(this.headerSearch.element, { type: 'div', className: ['header__search-form']});

    this.searchElement = Utils.createAnyElement(this.headerSearchForm.element, {
      type: 'input', 
      className: ['header__search-form-text'],
      attributes: [['type', 'search'], ['placeholder', 'SEARCH'], ['autocomplete', 'off'], ['name', 'inputData'], ['id', 'inputDataId']] })
      .element as HTMLInputElement;

    const searchVal = Utils.getArrayFromStorageEx<string>('searchData');
    if (searchVal.length) {
      this.searchElement.value = searchVal[0];
    }
    this.searchElement.focus();
    Listeners.addSearchInputEvent(this.searchElement);
  }

  static clearSearchField(): void {
    this.searchElement.value = '';
    this.searchElement.focus();
  }
}

export default Search;
