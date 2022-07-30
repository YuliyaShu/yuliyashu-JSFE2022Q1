import Footer from '../components/Footer';
import Header from '../components/Header';

function createGaragePage(): void {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');

  wrapper.append(Header({
    title: 'RACE GARAGE',
    isGaragePage: true,
    isWinnersPage: false,
  }));

  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);
}

export default createGaragePage;
