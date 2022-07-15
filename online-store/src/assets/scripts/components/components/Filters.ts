import { PosterInterface } from "../../interfaces.ts/PosterInterface";
import ListenersFilters from "../../listeners.ts/ListenersFilters";
import Poster from "./Poster";
import Posters from "./Posters";

class Filters { 

  static drawFilterPosters() {
    const arrOfActiveFilters = ListenersFilters.activeFilters;
    const arrOfPosters = Posters.categoriesData;
    const arrOfPostersCopy = arrOfPosters.slice();
    const start: PosterInterface[] = [];
    const arrOfArr: PosterInterface[][] = [[], [], [], [], [], []];
    
      arrOfPostersCopy.reduce((res, poster) => {
        for (let v = 0; v < arrOfActiveFilters.length - 2; v += 1) {
          
        if (arrOfActiveFilters[v].length === 0) {
          arrOfArr[v] = arrOfPostersCopy;
        } else {
          if (arrOfActiveFilters[v] && Object.values(poster).includes(arrOfActiveFilters[v][0]?.innerHTML)) {
            arrOfArr[v].push(poster);
            }
          if (arrOfActiveFilters[v] && Object.values(poster).includes(arrOfActiveFilters[v][1]?.innerHTML)) {
            arrOfArr[v].push(poster);
          }
          if (arrOfActiveFilters[v] && Object.values(poster).includes(arrOfActiveFilters[v][2]?.innerHTML)) {
            arrOfArr[v].push(poster);
          }
        }
      }
      if (arrOfActiveFilters[3].length === 0) {
        arrOfArr[3] = arrOfPostersCopy;
      } else {
        if (arrOfActiveFilters[3] && Object.values(poster).includes(true)) {
          arrOfArr[3].push(poster);
        }
      }

        const start1 = Number(arrOfActiveFilters[4][0]?.innerHTML);
        const end1 = Number(arrOfActiveFilters[4][1]?.innerHTML);
        const rangeQuantity = [...Array(end1 - start1 + 1).keys()].map(x => x + start1);
        rangeQuantity.forEach((q) => {
          if (arrOfActiveFilters[4] && Object.values(poster).includes(q.toString())) {
            arrOfArr[4].push(poster);
          }
        })
      
        const start2 = Number(arrOfActiveFilters[4][2]?.innerHTML);
        const end2 = Number(arrOfActiveFilters[4][3]?.innerHTML);
        const rangeYear = [...Array(end2 - start2 + 1).keys()].map(x => x + start2);
        rangeYear.forEach((y) => {
          if (arrOfActiveFilters[4] && Object.values(poster).includes(y.toString())) {
            arrOfArr[5].push(poster);
          }
        })
      return res;
      }, start)

    const arrOfPostersFilter = ((((arrOfArr[0]
      .filter(x => arrOfArr[1].includes(x)))
      .filter(y => arrOfArr[2].includes(y)))
      .filter(z => arrOfArr[3].includes(z)))
      .filter(q => arrOfArr[4].includes(q)))
      .filter(w => arrOfArr[5].includes(w));
    
    if (arrOfPostersFilter.length === 0) {
      const catalog = document.querySelector('.catalog');
      if (catalog) {
        catalog.innerHTML = 'There is no such posters in our catalog. Please, try another preferences!';
      } 
    } else {
      Poster.drawPoster(arrOfPostersFilter);
    }
  }
}

export default Filters;
