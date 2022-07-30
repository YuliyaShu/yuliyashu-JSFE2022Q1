import Footer from '../components/Footer';
import Header from '../components/Header';

function createWinnersPage(): void {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');

  wrapper.append(Header({
    title: 'RACE WINNERS',
    isGaragePage: false,
    isWinnersPage: true,
  }));

  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);
}

export default createWinnersPage;
