import AnyElement from "../../elements/AnyElement";
import Utils from "../../utils/Utils";
import ShopView from "../ShopView";
import * as noUiSlider from 'nouislider';
import ListenersFilters from "../../listeners.ts/ListenersFilters";

class Aside {
  static sliderQ: noUiSlider.API;
  static sliderY: noUiSlider.API;

  static bodyWrapper: ShopView["bodyWrapper"];

  static drawAside(bodyWrapper: AnyElement): void {
    this.bodyWrapper = bodyWrapper;

    const container = Utils.createAnyElement(this.bodyWrapper.element, { type: 'div', className: ['container', 'container__main'] });

    const aside = Utils.createAnyElement(container.element, { type: 'div', className: ['aside'] });

    const asideWrapper = Utils.createAnyElement(aside.element, { type: 'div', className: ['aside__wrapper']});

    Utils.createAnyElement(asideWrapper.element, { type: 'p', className: ['aside__name'], innerText: 'CHOOSE YOUR PREFERENCES' });
    const filtersWrapper = Utils.createAnyElement(asideWrapper.element, { type: 'div', className: ['aside__filters-wrapper'] });
    
    const filters: string[] = [
      'quantity',
      'year',
      'designer',
      'color',
      'size',
      'popularity'
    ];

    for (let i = 0; i < filters.length; i += 1) {
      const filterName = filters[i];
      Utils.createAnyElement(filtersWrapper.element, { type: 'div', className: ['aside__filter', filterName], innerText: filterName });     
    }
    
    const filterData = Utils.getArrayFromStorageEx<string[]>('filterData');
    

    // 'quantity'
    const quantity = document.querySelector('.quantity');
    if (quantity instanceof HTMLElement) {
      Utils.createAnyElement(quantity, { type: 'div', className: ['quantity__from', 'aside__filter-range'], innerText: filterData[4][0] || '0'});
      Utils.createAnyElement(quantity, { type: 'div', className: ['aside__filter-slider', 'quantity'], attributes: [['id', 'slider-q']] });

      const slider = document.getElementById('slider-q');
      if (slider instanceof HTMLElement) {
        console.log(+filterData[4][0] || 0);
        this.sliderQ = noUiSlider.create(slider, {
          start: [+filterData[4][0] || 0, +filterData[4][1] || 10],
          step: 1,
          connect: true,
          range: {
            'min': 0,
            'max': 10
          }
        });
      }
      
      Utils.createAnyElement(quantity, { type: 'div', className: ['quantity__to', 'aside__filter-range'], innerText: filterData[4][1] || '10' });
    }

    // 'year'
    const year = document.querySelector('.year');
    if (year instanceof HTMLElement) {
      Utils.createAnyElement(year, { type: 'div', className: ['year__from', 'aside__filter-range'], innerText: filterData[5][0] || '2012' });
      Utils.createAnyElement(year, { type: 'div', className: ['aside__filter-slider', 'year'], attributes: [['id', 'slider-y']] });

      const slider = document.getElementById('slider-y');
      if (slider instanceof HTMLElement) {
        this.sliderY = noUiSlider.create(slider, {
          start: [+filterData[5][0] || 2012, +filterData[5][1] || 2022],
          step: 1,
          connect: true,
          range: {
            'min': 2012,
            'max': 2022
          }
        });
      }

      Utils.createAnyElement(year, { type: 'div', className: ['year__to', 'aside__filter-range'], innerText: filterData[5][1] || '2022' });
    }

    // 'designer'
    const designer = document.querySelector('.designer');
    if (designer instanceof HTMLElement) {
      if (filterData[0].includes('Peppy')) {
        Utils.createAnyElement(designer, { type: 'button',  className: ['button', 'designer', 'designer__1', 'active-filter'], innerText: 'Peppy' });
      } else {
        Utils.createAnyElement(designer, { type: 'button',  className: ['button', 'designer', 'designer__1'], innerText: 'Peppy' });
      }

      if (filterData[0].includes('Eleven')) {
        Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer', 'designer__2', 'active-filter'], innerText: 'Eleven' });
      } else {
        Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer', 'designer__2'], innerText: 'Eleven' });
      }

      if (filterData[0].includes('Infinite_Jest')) {
        Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer', 'designer__3', 'active-filter'], innerText: 'Infinite_Jest' });
      } else {
        Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer', 'designer__3'], innerText: 'Infinite_Jest' });
      } 
    }

    // 'color'
    const color = document.querySelector('.color');
    if (color instanceof HTMLElement) {
      if (filterData[1].includes('green')) {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__1', 'color', 'active-filter'], innerText: 'green' });
      } else {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__1', 'color'], innerText: 'green' });
      }

      if (filterData[1].includes('orange')) {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__2', 'color', 'active-filter'], innerText: 'orange' });
      } else {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__2', 'color'], innerText: 'orange' });
      }

      if (filterData[1].includes('white')) {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__3', 'color', 'active-filter'], innerText: 'white' });
      } else {
        Utils.createAnyElement(color, { type: 'button',  className: ['button', 'color__3', 'color'], innerText: 'white' });
      }
    }

    // 'size'
    const size = document.querySelector('.size');
    if (size instanceof HTMLElement) {
      if (filterData[2].includes('20x20')) {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__1', 'size', 'active-filter'], innerText: '20x20' });
      } else {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__1', 'size'], innerText: '20x20' });
      }

      if (filterData[2].includes('50x50')) {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__2', 'size', 'active-filter'], innerText: '50x50' });
      } else {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__2', 'size'], innerText: '50x50' });
      }

      if (filterData[2].includes('70x70')) {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__3', 'size', 'active-filter'], innerText: '70x70' });
      } else {
        Utils.createAnyElement(size, { type: 'button',  className: ['button', 'size__3', 'size'], innerText: '70x70' });
      }
    }

    // 'popularity'
    const popularity = document.querySelector('.popularity');
    if (popularity instanceof HTMLElement) {
      if (filterData[3].includes('true')) {
        Utils.createAnyElement(popularity, { type: 'button',  className: ['button', 'popularity__1', 'popularity', 'active-filter'], innerText: '' });
      } else {
        Utils.createAnyElement(popularity, { type: 'button',  className: ['button', 'popularity__1', 'popularity'], innerText: '' });
      }
    }

    const resetWrapper = Utils.createAnyElement(asideWrapper.element, { type: 'div', className: ['aside__reset-wrapper'] });
    // reset filters
    Utils.createAnyElement(resetWrapper.element, { type: 'button', className: ['aside__reset-filters'], innerText: 'RESET FILTERS'});
    ListenersFilters.addResetListener();
    // reset settings
    Utils.createAnyElement(resetWrapper.element, { type: 'button', className: ['aside__reset-settings'], innerText: 'RESET SETTINGS'});
    ListenersFilters.addResetStorageListener();

    ListenersFilters.activeFilters = filterData;
    ListenersFilters.addFilterListeners();
  }
}

export default Aside;
