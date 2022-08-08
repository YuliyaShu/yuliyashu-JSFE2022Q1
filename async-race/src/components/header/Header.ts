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

function Header(props: Props): HTMLElement {
  const { title, isGaragePage, isWinnersPage } = props;

  const header = document.createElement('header');
  header.classList.add('header');
  const headerElement = updateHeader(header, title, isGaragePage, isWinnersPage);
  return headerElement;
}

function updateHeader(
  header: HTMLElement,
  title: string,
  isGaragePage: boolean,
  isWinnersPage: boolean,
): HTMLElement {
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  const container = createMyElement(header, { type: 'div', className: ['header__container', 'container'] });
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
  return header;
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

function createWinnerPage() {
  localStorage.setItem('page', 'winners');
  const header = document.querySelector('header') as HTMLElement;
  const garagePage = document.querySelector('.main') as HTMLElement;
  const winnersPage = document.querySelector('.main__winners') as HTMLElement;
  updateHeader(header, mainTitleWinnersVar.toUpperCase(), false, true);
  garagePage.style.display = 'none';
  winnersPage.style.display = 'block';
}

function createGaragePage() {
  localStorage.setItem('page', 'garage');
  const header = document.querySelector('header') as HTMLElement;
  const garagePage = document.querySelector('.main') as HTMLElement;
  const winnersPage = document.querySelector('.main__winners') as HTMLElement;
  updateHeader(header, mainTitleGarageVar.toUpperCase(), true, false);
  garagePage.style.display = 'block';
  winnersPage.style.display = 'none';
}

export { Header, createGaragePage, createWinnerPage };
