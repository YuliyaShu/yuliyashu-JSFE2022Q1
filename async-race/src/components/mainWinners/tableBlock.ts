/* eslint-disable import/no-cycle */
import { AllCars, getCars, getWinners } from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  columnCar,
  columnName,
  columnNumber,
  columnTime,
  columnWins,
  nextPageVar, pageVar, prevPageVar, totalWinnersVar,
} from '../../utils/string-variables';
import { createCarImage } from '../mainGarage/trackBlock';

let winnersPrevPageButton: HTMLElement;
let winnersNextPageButton: HTMLElement;
const startPageNumber = 1;
localStorage.setItem('current-winners-page-number', startPageNumber.toString());

async function fillTableHeadlines(parentElement: HTMLElement) {
  for (let i = 0; i < 5; i += 1) {
    const innerForCell = [
      columnNumber,
      columnCar,
      columnName,
      columnWins,
      columnTime,
    ];
    createMyElement(parentElement, {
      type: 'div',
      className: ['cell', 'cell-headers'],
      innerText: `${innerForCell[i]}`,
    });
  }
}

async function fillTable(
  parentElement: HTMLElement,
  page = 1,
  sort?: 'id' | 'wins' | 'time',
  order?: 'ASC' | 'DESC',
  limit = 10,
) {
  const winnerInfo = await getWinners(page, sort, order, limit);
  const { count, winners } = winnerInfo;
  if (count) {
    const winnersPage = localStorage.getItem('current-winners-page-number') as String;
    const winnersPerPage = +count < limit ? +count : limit;
    const winnersCars = (await getWinners(+winnersPage)).winners;
    const carsOnPage = await getCars() as AllCars;
    const totalCarsInGarage = carsOnPage.count as String;
    const cars = await getCars(+totalCarsInGarage) as AllCars;

    for (let j = 0; j < winnersPerPage; j += 1) {
      const carsId = winnersCars[j].id;
      const carName = cars.cars.find((item) => item.id === carsId)?.name;
      const carColor = cars.cars.find((item) => item.id === carsId)?.color;
      if (carColor) {
        const carImg = createCarImage(carColor, carsId);
        const number = j + 1 + (page - 1) * 10;
        const innerForCell = [
          number,
          '',
          carName,
          winners[j].wins,
          winners[j].time,
        ];
        for (let i = 0; i < 5; i += 1) {
          const cellElement = createMyElement(parentElement, {
            type: 'div',
            className: ['cell', `cell-${i + 1}`],
            innerText: `${innerForCell[i]}`,
          }).element;
          if (cellElement.classList.contains('cell-2') && carImg) {
            carImg.classList.add('car-winner');
            cellElement.append(carImg);
          }
        }
      }
    }
  }
}

async function createTableOfWinners(parentElement: HTMLElement, page: number = 1): Promise<void> {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  // title
  createMyElement(parentElement, {
    type: 'p',
    className: ['main__title-winners'],
    innerText: `${(await getWinners()).count} ${totalWinnersVar}`.toUpperCase(),
  });

  // pages counter
  const totalWinnersPages = Math.ceil(Number((await getWinners()).count) / 10) || 1;
  createMyElement(parentElement, {
    type: 'p',
    className: ['main__page-counter-winners'],
    innerText: `${pageVar}${page} from ${totalWinnersPages}`,
  });

  // table
  const tableWrapper = createMyElement(parentElement, {
    type: 'div',
    className: ['main__page-table-wrapper'],
  }).element;
  const headlines = createMyElement(tableWrapper, {
    type: 'div',
    className: ['table__headlines'],
  }).element;
  if (page) {
    fillTableHeadlines(headlines);
    fillTable(headlines, page);
  }

  // pagination
  const winnersPagination = createMyElement(parentElement, {
    type: 'div',
    className: ['winners__pagination'],
  }).element;

  const currentPageNumber = Number(localStorage.getItem('current-winners-page-number'));
  winnersPrevPageButton = createMyElement(winnersPagination, {
    type: 'button',
    className: ['block-button', 'winners__prev-button'],
    innerText: prevPageVar.toUpperCase(),
  }).element;
  winnersPrevPageButton.addEventListener('click', (event) => {
    // prev page button
    if (event.target === winnersPrevPageButton) {
      localStorage.setItem('current-winners-page-number', (currentPageNumber - 1).toString());
      createTableOfWinners(parentElement, currentPageNumber - 1);
    }
  });
  if (page === 1) {
    winnersPrevPageButton.classList.add('inactive');
    winnersPrevPageButton.setAttribute('disabled', '');
  } else {
    winnersPrevPageButton.classList.remove('inactive');
    winnersPrevPageButton.removeAttribute('disabled');
  }

  winnersNextPageButton = createMyElement(winnersPagination, {
    type: 'button',
    className: ['block-button', 'winners__next-button'],
    innerText: nextPageVar.toUpperCase(),
  }).element;
  winnersNextPageButton.addEventListener('click', (event) => {
    // next page button
    if (event.target === winnersNextPageButton) {
      localStorage.setItem('current-winners-page-number', (currentPageNumber + 1).toString());
      createTableOfWinners(parentElement, currentPageNumber + 1);
    }
  });
  if (page === totalWinnersPages) {
    winnersNextPageButton.classList.add('inactive');
    winnersNextPageButton.setAttribute('disabled', '');
  } else {
    winnersNextPageButton.classList.remove('inactive');
    winnersNextPageButton.removeAttribute('disabled');
  }
}

export default createTableOfWinners;
