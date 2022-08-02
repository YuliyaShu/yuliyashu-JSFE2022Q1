import { getCars } from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  carsInGarageVar,
  nextPageVar,
  pageVar,
  prevPageVar,
} from '../../utils/string-variables';
import './garage.css';
import createManageBlock from './manageBlock';
import createTrack from './track';

async function MainGarage(): Promise<HTMLElement> {
  const main = document.createElement('main');
  main.classList.add('main');
  const container = createMyElement(main, { type: 'div', className: ['container__main', 'container'] });
  const mainWrapper = createMyElement(container.element, { type: 'div', className: ['main__wrapper'] });

  // title
  createMyElement(mainWrapper.element, {
    type: 'p',
    className: ['main__title'],
    innerText: `${(await getCars()).count} ${carsInGarageVar}`.toUpperCase(),
  });

  // manage block
  createManageBlock(mainWrapper.element);

  // page count
  createMyElement(mainWrapper.element, {
    type: 'p',
    className: ['main__page-counter'],
    innerText: `${pageVar}`,
  });

  // track
  createTrack(mainWrapper.element);

  // page pagination buttons
  const mainPagination = createMyElement(mainWrapper.element, {
    type: 'div',
    className: ['main__pagination'],
  });
  createMyElement(mainPagination.element, {
    type: 'button',
    className: ['block-button', 'prev-button'],
    innerText: prevPageVar.toUpperCase(),
  });
  createMyElement(mainPagination.element, {
    type: 'button',
    className: ['block-button', 'next-button'],
    innerText: nextPageVar.toUpperCase(),
  });

  return main;
}

export default MainGarage;
