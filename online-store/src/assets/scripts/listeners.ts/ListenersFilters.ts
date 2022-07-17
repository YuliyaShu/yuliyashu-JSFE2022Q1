import Filters from "../components/components/Filters";
import Poster from "../components/components/Poster";
import Posters from "../components/components/Posters";
import Aside from "../view/shop/Aside";

class ListenersFilters {
  static activeFilters: (string | null)[][] = [[], [], [], [], []];
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
              this.activeFilters[0].push(button.innerHTML);
            } else if (button === color1 || button === color2 || button === color3) {
              this.activeFilters[1].push(button.innerHTML);
            } else if (button === size1 || button === size2 || button === size3) {
              this.activeFilters[2].push(button.innerHTML);
            } else {
              this.activeFilters[3].push(button.innerHTML);
            }
            Filters.drawFilterPosters();
          } else {
            button.classList.remove('active-filter');
            if (button === designer1 || button === designer2 || button === designer3) {
              const index0 = this.activeFilters[0].indexOf(button.innerHTML);
              this.activeFilters[0].splice(index0, 1);
            } else if (button === color1 || button === color2 || button === color3) {
              const index1 = this.activeFilters[1].indexOf(button.innerHTML);
              this.activeFilters[1].splice(index1, 1);
            } else if (button === size1 || button === size2 || button === size3) {
              const index2 = this.activeFilters[2].indexOf(button.innerHTML);
              this.activeFilters[2].splice(index2, 1);
            } else {
              const index3 = this.activeFilters[3].indexOf(button.innerHTML);
              this.activeFilters[3].splice(index3, 1);
            }
            Filters.drawFilterPosters();
          }
        })
      }
    })

        
    Aside.sliderQ.on('change', () => {
      console.log('here');
      const sliderValueQ = Aside.sliderQ.get();
      const quantityFrom = document.querySelector(arrOfTextArea[0]);
      const quantityTo = document.querySelector(arrOfTextArea[1]);  
      if (quantityFrom && quantityTo && Array.isArray(sliderValueQ)) {
        quantityFrom.innerHTML = (+sliderValueQ[0]).toString();
        quantityTo.innerHTML = (+sliderValueQ[1]).toString();
        this.activeFilters[4][0] = (+sliderValueQ[0]).toString();
        this.activeFilters[4][1] = (+sliderValueQ[1]).toString();
      }
      Filters.drawFilterPosters();
    })

    
    Aside.sliderY.on('change', () => {
      const sliderValueY = Aside.sliderY.get();
      const yearFrom = document.querySelector(arrOfTextArea[2]);
      const yearTo = document.querySelector(arrOfTextArea[3]);
      if (yearFrom && yearTo && Array.isArray(sliderValueY)) {
        yearFrom.innerHTML = (+sliderValueY[0]).toString();
        yearTo.innerHTML = (+sliderValueY[1]).toString();
        this.activeFilters[4][2] = (+sliderValueY[0]).toString();
        this.activeFilters[4][3] = (+sliderValueY[1]).toString();
      }
      Filters.drawFilterPosters();
    })
  }

  static addResetListener() {
    const resetButton = document.querySelector('.aside__reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        const arrOfPosters = Posters.categoriesData;
        Poster.drawPoster(arrOfPosters);
  
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((b) => b.classList.remove('active-filter'));
        Aside.sliderQ.reset();
        Aside.sliderY.reset();
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