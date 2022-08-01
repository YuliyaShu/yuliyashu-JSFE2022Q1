import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { mainTitleWinnersVar } from '../utils/string-variables';

function createWinnersPage(): void {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');
  wrapper.classList.add('body__wrapper');

  wrapper.append(Header({
    title: mainTitleWinnersVar.toUpperCase(),
    isGaragePage: false,
    isWinnersPage: true,
  }));

  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);
}

export default createWinnersPage;
