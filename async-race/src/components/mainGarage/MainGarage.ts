import { getCars } from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import './garage.css';
import createManageBlock from './manageBlock';

async function MainGarage(): Promise<HTMLElement> {
  const main = document.createElement('main');
  main.classList.add('main');
  const container = createMyElement(main, { type: 'div', className: ['container__main', 'container'] });
  const mainWrapper = createMyElement(container.element, { type: 'div', className: ['main__wrapper'] });

  // title
  createMyElement(mainWrapper.element, {
    type: 'p',
    className: ['main__title'],
    innerText: `${(await getCars()).count} cars are in your garage`.toUpperCase(),
  });

  // manage block
  createManageBlock(mainWrapper.element);

  // track

  return main;
}

export default MainGarage;
