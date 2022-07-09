import AnyElement from "../../elements/AnyElement";
import Utils from "../../utils/Utils";

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
    Utils.createAnyElement(this.headerSearchForm.element, { type: 'input', className: ['header__search-form-search'],  attributes: [['type', 'submit'], ['value', 'GO']] })

  }

}

export default Search;
