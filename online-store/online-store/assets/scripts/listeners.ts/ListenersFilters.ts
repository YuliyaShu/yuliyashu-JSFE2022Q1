import Filters from "../components/components/Filters";
import Poster from "../components/components/Poster";
import Posters from "../components/components/Posters";
import * as noUiSlider from 'nouislider';
import Utils from "../utils/Utils";

class ListenersFilters {
  static activeFilters: (Element | null)[][] = [[], [], [], [], []];
  static addFilterListeners() {
    const designer1 = document.querySelector('.designer__1');
    const designer2 = document.querySelector('.designer__2');
    const designer3 = document.querySelector('.designer__3');
    const color1 = document.querySelector('.color__1');
    const color2 = document.querySelector('.color__2');
    const color3 = document.querySelector('.color__3');
    const size1 = document.querySelector('.size__1');
    const size2 = document.querySelector('.size__2');
    const size3 = document.querySelector('.size__3');
    const popularity1 = document.querySelector('.popularity__1');
    const quality1 = document.querySelectorAll('.noUi-handle-lower')[0];
    const quality2 = document.querySelectorAll('.noUi-handle-upper')[0];
    const year1 = document.querySelectorAll('.noUi-handle-lower')[1];
    const year2 = document.querySelectorAll('.noUi-handle-upper')[1];

    const arrOfFilterButtons = [
      designer1,
      designer2,
      designer3,
      color1,
      color2,
      color3,
      size1,
      size2,
      size3,
      popularity1
    ];

    const arrOfSliders = [
      quality1,
      quality2,
      year1,
      year2
    ];

    const arrOfTextArea = [
      '.quantity__from',
      '.quantity__to',
      '.year__from',
      '.year__to'
    ]

    arrOfFilterButtons.map((button) => {
      if (button) {
        button.addEventListener('click', () => {
          if (!button.classList.contains('active-filter')) {
            button.classList.add('active-filter');
            if (button === designer1 || button === designer2 || button === designer3) {
              this.activeFilters[0].push(button);
            } else if (button === color1 || button === color2 || button === color3) {
              this.activeFilters[1].push(button);
            } else if (button === size1 || button === size2 || button === size3) {
              this.activeFilters[2].push(button);
            } else {
              this.activeFilters[3].push(button);
            }
            Filters.drawFilterPosters();
          } else {
            button.classList.remove('active-filter');
            if (button === designer1 || button === designer2 || button === designer3) {
              const index0 = this.activeFilters[0].indexOf(button);
              this.activeFilters[0].splice(index0, 1);
            } else if (button === color1 || button === color2 || button === color3) {
              const index1 = this.activeFilters[1].indexOf(button);
              this.activeFilters[1].splice(index1, 1);
            } else if (button === size1 || button === size2 || button === size3) {
              const index2 = this.activeFilters[2].indexOf(button);
              this.activeFilters[2].splice(index2, 1);
            } else {
              const index3 = this.activeFilters[3].indexOf(button);
              this.activeFilters[3].splice(index3, 1);
            }
            Filters.drawFilterPosters();
          }
        })
      }
    })
    
    for (let i = 0; i < arrOfSliders.length; i += 1) {
      if (arrOfSliders[i]) {
        const textArea = document.querySelector(arrOfTextArea[i]);
        this.activeFilters[4].push(textArea);
        arrOfSliders[i].addEventListener('click', () => {
          const attr = arrOfSliders[i].getAttribute('aria-valuenow');
          let newText = '';
          if (attr) {
            newText = attr.split('.')[0];
          }
          if (textArea) {
            textArea.innerHTML = newText;
          }
          Filters.drawFilterPosters();
        })
      }
    }
  }

  static addResetListener() {
    console.log('here');
    const resetButton = document.querySelector('.aside__reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        const arrOfPosters = Posters.categoriesData;
        Poster.drawPoster(arrOfPosters);
  
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((b) => b.classList.remove('active-filter'));

        const sliderQ = document.getElementById('slider-q');
        const parent = sliderQ?.parentNode;
        if (parent) {
          parent.removeChild(sliderQ);
        }
        const quantityFrom = document.querySelector('.quantity__from');
        if (quantityFrom && quantityFrom instanceof HTMLElement) {
          Utils.createAnyElement(quantityFrom, { type: 'div', className: ['aside__filter-slider', 'quantity'], appendType: 'after', attributes: [['id', 'slider-q']] });
        }
        const slider = document.getElementById('slider-q');
        if (slider instanceof HTMLElement) {
          noUiSlider.create(slider, {
            start: [0, 10],
            step: 1,
            connect: true,
            range: {
              'min': 0,
              'max': 10
            }
          });
        }
        
        const sliderY = document.getElementById('slider-y');
        const parentY = sliderY?.parentNode;
        if (parentY) {
          parentY.removeChild(sliderY);
        }
        const yearFrom = document.querySelector('.year__from');
        if (yearFrom && yearFrom instanceof HTMLElement) {
          Utils.createAnyElement(yearFrom, { type: 'div', className: ['aside__filter-slider', 'year'], appendType: 'after', attributes: [['id', 'slider-y']] });
        }
        const slider2 = document.getElementById('slider-y');
        if (slider2 instanceof HTMLElement) {
          noUiSlider.create(slider2, {
            start: [2012, 2022],
            step: 1,
            connect: true,
            range: {
              'min': 2012,
              'max': 2022
            }
          });
        }
        this.addFilterListeners();
  
        const quantityFrom1 = document.querySelector('.quantity__from');
        if (quantityFrom1) {
          quantityFrom1.innerHTML = '0';
        }
        
        const quantityTo = document.querySelector('.quantity__to');
        if (quantityTo) {
          quantityTo.innerHTML = '10';
        }
  
        const yearFrom1 = document.querySelector('.year__from');
        if (yearFrom1) {
          yearFrom1.innerHTML = '2012';
        }
  
        const yearTo = document.querySelector('.year__to');
        if (yearTo) {
          yearTo.innerHTML = '2022';
        }
      })
    }
  } 
}

export default ListenersFilters;