import createMyElement from '../../utils/HTML_Elements/createMyElement';
import createTableOfWinners from './tableBlock';
import './winners.css';

async function MainWinners(): Promise<HTMLElement> {
  const main = document.createElement('div');
  main.classList.add('main__winners');
  main.style.display = 'none';

  const container = createMyElement(main, { type: 'div', className: ['container__main', 'container'] });
  const mainWrapper = createMyElement(container.element, { type: 'div', className: ['main__wrapper-winners'] });

  // table block
  createTableOfWinners(mainWrapper.element);

  return main;
}

export default MainWinners;
