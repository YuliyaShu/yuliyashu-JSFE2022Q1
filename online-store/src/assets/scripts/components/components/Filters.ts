import { PosterInterface } from "../../interfaces.ts/PosterInterface";
import ListenersFilters from "../../listeners.ts/ListenersFilters";
import Poster from "./Poster";
import Posters from "./Posters";

class Filters { 

  static drawFilterPosters() {
    const activeFilters = ListenersFilters.activeFilters;
    const posters = Posters.categoriesData;
    const postersCopy = posters.slice();
    const startForReduce: PosterInterface[] = [];
    const previousFilteredPosters: PosterInterface[][] = [[], [], [], [], [], []];
    
      postersCopy.reduce((res, poster) => {
        for (let v = 0; v < activeFilters.length - 2; v += 1) {
          
        if (activeFilters[v].length === 0) {
          previousFilteredPosters[v] = postersCopy;
        } else {
          if (activeFilters[v] && Object.values(poster).includes(activeFilters[v][0])) {
            previousFilteredPosters[v].push(poster);
            }
          if (activeFilters[v] && Object.values(poster).includes(activeFilters[v][1])) {
            previousFilteredPosters[v].push(poster);
          }
          if (activeFilters[v] && Object.values(poster).includes(activeFilters[v][2])) {
            previousFilteredPosters[v].push(poster);
          }
        }
      }
      if (activeFilters[3].length === 0) {
        previousFilteredPosters[3] = postersCopy;
      } else {
        if (activeFilters[3] && Object.values(poster).includes(true)) {
          previousFilteredPosters[3].push(poster);
        }
      }

        const start1 = Number(activeFilters[4][0]);
        const end1 = Number(activeFilters[4][1]);
        const rangeQuantity = [...Array(end1 - start1 + 1).keys()].map(x => x + start1);
        rangeQuantity.forEach((q) => {
          if (activeFilters[4] && Object.values(poster).includes(q.toString())) {
            previousFilteredPosters[4].push(poster);
          }
        })
      
        const start2 = Number(activeFilters[4][2]);
        const end2 = Number(activeFilters[4][3]);
        const rangeYear = [...Array(end2 - start2 + 1).keys()].map(x => x + start2);
        rangeYear.forEach((y) => {
          if (activeFilters[4] && Object.values(poster).includes(y.toString())) {
            previousFilteredPosters[5].push(poster);
          }
        })
      return res;
      }, startForReduce)

    const filteredPosters = ((((previousFilteredPosters[0]
      .filter(x => previousFilteredPosters[1].includes(x)))
      .filter(y => previousFilteredPosters[2].includes(y)))
      .filter(z => previousFilteredPosters[3].includes(z)))
      .filter(q => previousFilteredPosters[4].includes(q)))
      .filter(w => previousFilteredPosters[5].includes(w));
    
    if (filteredPosters.length === 0) {
      const catalog = document.querySelector('.catalog');
      if (catalog) {
        catalog.innerHTML = 'There is no such posters in our catalog. Please, try another preferences!';
      } 
    } else {
      localStorage.setItem('filteredPosters', JSON.stringify(filteredPosters));
      Poster.drawPoster(filteredPosters);
    }
  }
}

export default Filters;
