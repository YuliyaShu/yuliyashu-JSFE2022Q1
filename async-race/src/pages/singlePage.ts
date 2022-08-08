import Footer from '../components/footer/Footer';
import { createGaragePage, createWinnerPage, Header } from '../components/header/Header';
import MainGarage from '../components/mainGarage/MainGarage';
import MainWinners from '../components/mainWinners/MainWinners';
import { mainTitleGarageVar } from '../utils/string-variables';

async function createStartPage(): Promise<void> {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');
  wrapper.classList.add('body__wrapper');

  wrapper.append(Header({
    title: mainTitleGarageVar.toUpperCase(),
    isGaragePage: true,
    isWinnersPage: false,
  }));
  wrapper.append(await MainGarage());
  wrapper.append(await MainWinners());
  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);

  if (localStorage.getItem('page') === 'winners') {
    createWinnerPage();
  } else {
    createGaragePage();
  }
}

export default createStartPage;
