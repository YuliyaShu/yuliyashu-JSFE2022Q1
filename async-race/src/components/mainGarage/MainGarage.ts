import { AllCars, getCars } from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  carsInGarageVar,
} from '../../utils/string-variables';
import './garage.css';
import { createManageBlock } from './manageBlock';
import { createTrack } from './trackBlock';

async function MainGarage(): Promise<HTMLElement> {
  const main = document.createElement('main');
  main.classList.add('main');
  const container = createMyElement(main, { type: 'div', className: ['container__main', 'container'] });
  const mainWrapper = createMyElement(container.element, { type: 'div', className: ['main__wrapper'] });
  // title
  const totalCars = await getCars() as AllCars;
  createMyElement(mainWrapper.element, {
    type: 'p',
    className: ['main__title'],
    innerText: `${totalCars.count} ${carsInGarageVar}`.toUpperCase(),
  });

  // manage block
  createManageBlock(mainWrapper.element);

  // track block
  const trackMainWrapper = createMyElement(mainWrapper.element, {
    type: 'div',
    className: ['track-main__wrapper'],
  });
  createTrack(trackMainWrapper.element);

  return main;
}

export default MainGarage;
