import createMyElement from '../../utils/HTML_Elements/createMyElement';
import './header.css';

type Props = {
  title: string;
  isGaragePage: boolean;
  isWinnersPage: boolean;
};

function Header(props: Props): HTMLElement {
  const { title, isGaragePage, isWinnersPage } = props;

  const header = document.createElement('header');
  header.classList.add('header');
  const container = createMyElement(header, { type: 'div', className: ['header__container', 'container'] });
  const headerWrapper = createMyElement(container.element, { type: 'div', className: ['header__wrapper'] });
  createMyElement(headerWrapper.element, { type: 'p', className: ['header__wrapper-name'], innerText: title });
  const garageButton = createMyElement(headerWrapper.element, { type: 'button', className: ['button', 'header__wrapper-button'], innerText: 'garage' });
  if (isGaragePage) {
    garageButton.element.classList.add('active-button');
  }
  const winnersButton = createMyElement(headerWrapper.element, { type: 'button', className: ['button', 'header__wrapper-button'], innerText: 'winners' });
  if (isWinnersPage) {
    winnersButton.element.classList.add('active-button');
  }

  return header;
}

export default Header;
