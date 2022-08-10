/* eslint-disable @typescript-eslint/no-use-before-define */
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  garagePageNameVar, mainTitleGarageVar, mainTitleWinnersVar, winnersPageNameVar,
} from '../../utils/string-variables';
import './header.css';

type Props = {
  title: string;
  isGaragePage: boolean;
  isWinnersPage: boolean;
};
let garageButton: HTMLElement;
let winnersButton: HTMLElement;

function header(props: Props): HTMLElement {
  const { title, isGaragePage, isWinnersPage } = props;

  const headerElement = document.createElement('header');
  headerElement.classList.add('header');
  const updateHeaderElement = updateHeader(headerElement, title, isGaragePage, isWinnersPage);
  return updateHeaderElement;
}

function updateHeader(
  headerElement: HTMLElement,
  title: string,
  isGaragePage: boolean,
  isWinnersPage: boolean,
): HTMLElement {
  while (headerElement.firstChild) {
    headerElement.removeChild(headerElement.firstChild);
  }
  const container = createMyElement(headerElement, { type: 'div', className: ['header__container', 'container'] });
  const headerWrapper = createMyElement(container.element, { type: 'div', className: ['header__wrapper'] });
  createMyElement(headerWrapper.element, { type: 'p', className: ['header__wrapper-name'], innerText: title });

  garageButton = createMyElement(headerWrapper.element, {
    type: 'button',
    className: ['button', 'header__wrapper-button'],
    innerText: garagePageNameVar,
  }).element;
  garageButton.addEventListener('click', switchPagesListeners);

  if (isGaragePage) {
    garageButton.classList.add('active-button');
  }

  winnersButton = createMyElement(headerWrapper.element, {
    type: 'button',
    className: ['button', 'header__wrapper-button'],
    innerText: winnersPageNameVar,
  }).element;
  winnersButton.addEventListener('click', switchPagesListeners);

  if (isWinnersPage) {
    winnersButton.classList.add('active-button');
  }
  return headerElement;
}

// listeners
function switchPagesListeners(event: MouseEvent): void {
  // to garage page
  if (event.target === garageButton) {
    createGaragePage();
  }

  // to winners page
  if (event.target === winnersButton) {
    createWinnerPage();
  }
}

async function createWinnerPage() {
  localStorage.setItem('page', 'winners');
  const headerElement = document.querySelector('header') as HTMLElement;
  const garagePage = document.querySelector('.main') as HTMLElement;
  const winnersPage = document.querySelector('.main__winners') as HTMLElement;
  updateHeader(headerElement, mainTitleWinnersVar.toUpperCase(), false, true);
  garagePage.style.display = 'none';
  winnersPage.style.display = 'block';
}

function createGaragePage() {
  localStorage.setItem('page', 'garage');
  const headerElement = document.querySelector('header') as HTMLElement;
  const garagePage = document.querySelector('.main') as HTMLElement;
  const winnersPage = document.querySelector('.main__winners') as HTMLElement;
  updateHeader(headerElement, mainTitleGarageVar.toUpperCase(), true, false);
  garagePage.style.display = 'block';
  winnersPage.style.display = 'none';
}

export { header, createGaragePage, createWinnerPage };
