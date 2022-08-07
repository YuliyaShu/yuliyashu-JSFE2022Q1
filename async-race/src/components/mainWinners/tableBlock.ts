/* eslint-disable @typescript-eslint/no-use-before-define */
import { getWinners } from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  nextPageVar, pageVar, prevPageVar, totalWinnersVar,
} from '../../utils/string-variables';

let winnersPrevPageButton: HTMLElement;
let winnersNextPageButton: HTMLElement;
const startPageNumber = 1;
localStorage.setItem('current-winners-page-number', startPageNumber.toString());

async function createTableOfWinners(parentElement: HTMLElement): Promise<void> {
  // title
  createMyElement(parentElement, {
    type: 'p',
    className: ['main__title-winners'],
    innerText: `${(await getWinners()).count} ${totalWinnersVar}`.toUpperCase(),
  });

  // pages counter
  const totalWinnersPages = Math.ceil(Number((await getWinners()).count) / 10) || 1;
  const currentWinnersPageNumber = localStorage.getItem('current-winners-page-number');
  createMyElement(parentElement, {
    type: 'p',
    className: ['main__page-counter-winners'],
    innerText: `${pageVar}${currentWinnersPageNumber} from ${totalWinnersPages}`,
  });

  // table
  const tableWrapper = createMyElement(parentElement, {
    type: 'div',
    className: ['main__page-table-wrapper'],
  }).element;
  console.log(tableWrapper);

  // pagination
  const winnersPagination = createMyElement(parentElement, {
    type: 'div',
    className: ['winners__pagination'],
  }).element;

  winnersPrevPageButton = createMyElement(winnersPagination, {
    type: 'button',
    className: ['block-button', 'winners__prev-button'],
    innerText: prevPageVar.toUpperCase(),
  }).element;
  winnersPrevPageButton.addEventListener('click', paginationWinnersListeners);
  if (currentWinnersPageNumber === '1') {
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
  winnersNextPageButton.addEventListener('click', paginationWinnersListeners);
  if (currentWinnersPageNumber === totalWinnersPages.toString()) {
    winnersNextPageButton.classList.add('inactive');
    winnersNextPageButton.setAttribute('disabled', '');
  } else {
    winnersNextPageButton.classList.remove('inactive');
    winnersNextPageButton.removeAttribute('disabled');
  }
}

async function updateTableOfWinners(page: number) {
  console.log(page);
  const wrapper = document.querySelector('.main__wrapper-winners');
  if (wrapper instanceof HTMLElement) {
    wrapper.innerHTML = '';
    await createTableOfWinners(wrapper);
  }
}

// listeners
async function paginationWinnersListeners(event: MouseEvent) {
  const currentPageNumber = Number(localStorage.getItem('current-winners-page-number'));
  // next page button
  if (event.target === winnersNextPageButton) {
    localStorage.setItem('current-winners-page-number', (currentPageNumber + 1).toString());
    updateTableOfWinners(currentPageNumber + 1);
  }

  // prev page button
  if (event.target === winnersPrevPageButton) {
    localStorage.setItem('current-winners-page-number', (currentPageNumber - 1).toString());
    updateTableOfWinners(currentPageNumber - 1);
  }
}

export default createTableOfWinners;
