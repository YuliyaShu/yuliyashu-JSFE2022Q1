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

    // 'quantity'
    const quantity = document.querySelector('.quantity');
    if (quantity instanceof HTMLElement) {
      Utils.createAnyElement(quantity, { type: 'br' });
      Utils.createAnyElement(quantity, { type: 'div', className: ['quantity__from', 'aside__filter-range'], innerText: '0' });
      Utils.createAnyElement(quantity, { type: 'div', className: ['aside__filter-slider', 'quantity'], attributes: [['id', 'slider-q']] });

      const slider = document.getElementById('slider-q');
      if (slider instanceof HTMLElement) {
        this.sliderQ = noUiSlider.create(slider, {
          start: [0, 10],
          step: 1,
          connect: true,
          range: {
            'min': 0,
            'max': 10
          }
        });
      }
      
      Utils.createAnyElement(quantity, { type: 'div', className: ['quantity__to', 'aside__filter-range'], innerText: '10' });
    }

    // 'year'
    const year = document.querySelector('.year');
    if (year instanceof HTMLElement) {
      Utils.createAnyElement(year, { type: 'div', className: ['year__from', 'aside__filter-range'], innerText: '2012' });
      Utils.createAnyElement(year, { type: 'div', className: ['aside__filter-slider', 'year'], attributes: [['id', 'slider-y']] });

      const slider = document.getElementById('slider-y');
      if (slider instanceof HTMLElement) {
        this.sliderY = noUiSlider.create(slider, {
          start: [2012, 2022],
          step: 1,
          connect: true,
          range: {
            'min': 2012,
            'max': 2022
          }
        });
      }

      Utils.createAnyElement(year, { type: 'div', className: ['year__to', 'aside__filter-range'], innerText: '2022' });
    }

    // 'designer'
    const designer = document.querySelector('.designer');
    if (designer instanceof HTMLElement) {
      Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer__1', 'designer'], innerText: 'Peppy' });
      Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer__2', 'designer'], innerText: 'Eleven' });
      Utils.createAnyElement(designer, { type: 'button', className: ['button', 'designer__3', 'designer'], innerText: 'Infinite_Jest' });
    }

    // 'color'
    const color = document.querySelector('.color');
    if (color instanceof HTMLElement) {
      Utils.createAnyElement(color, { type: 'button', className: ['button', 'color__1', 'color'], innerText: 'green' });
      Utils.createAnyElement(color, { type: 'button', className: ['button', 'color__2', 'color'], innerText: 'orange' });
      Utils.createAnyElement(color, { type: 'button', className: ['button', 'color__3', 'color'], innerText: 'white' });
    }

    // 'size'
    const size = document.querySelector('.size');
    if (size instanceof HTMLElement) {
      Utils.createAnyElement(size, { type: 'button', className: ['button', 'size__1', 'size'], innerText: '20x20' });
      Utils.createAnyElement(size, { type: 'button', className: ['button', 'size__2', 'size'], innerText: '50x50' });
      Utils.createAnyElement(size, { type: 'button', className: ['button', 'size__3', 'size'], innerText: '70x70' });
    }
    // 'popularity'
    const popularity = document.querySelector('.popularity');
    if (popularity instanceof HTMLElement) {
      Utils.createAnyElement(popularity, { type: 'button', className: ['button', 'popularity__1', 'popularity'], innerText: '' });
    }

    const resetWrapper = Utils.createAnyElement(asideWrapper.element, { type: 'div', className: ['aside__reset-wrapper'] });
    // reset filters
    Utils.createAnyElement(resetWrapper.element, { type: 'button', className: ['aside__reset-filters'], innerText: 'RESET FILTERS'});
    ListenersFilters.addResetListener();
    // reset settings
    Utils.createAnyElement(resetWrapper.element, { type: 'button', className: ['aside__reset-settings'], innerText: 'RESET SETTINGS'});

    ListenersFilters.addFilterListeners();
  }
}

export default Aside;
