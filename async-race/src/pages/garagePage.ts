import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function createGaragePage(): void {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');
  wrapper.classList.add('body__wrapper');

  wrapper.append(Header({
    title: 'RACE GARAGE',
    isGaragePage: true,
    isWinnersPage: false,
  }));

  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);
  console.log('createGarage()');
}

export default createGaragePage;
