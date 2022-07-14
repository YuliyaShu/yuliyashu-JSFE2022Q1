import Filters from "../components/components/Filters";

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
        console.log(button);
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
}

export default ListenersFilters;