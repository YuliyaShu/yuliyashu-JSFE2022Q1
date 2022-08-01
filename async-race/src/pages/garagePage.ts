import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MainGarage from '../components/mainGarage/MainGarage';

async function createGaragePage(): Promise<void> {
  const fragment = new DocumentFragment();

  const wrapper = document.createElement('div');
  wrapper.classList.add('body__wrapper');

  wrapper.append(Header({
    title: 'RACE GARAGE',
    isGaragePage: true,
    isWinnersPage: false,
  }));
  wrapper.append(await MainGarage());
  wrapper.append(Footer());

  fragment.append(wrapper);
  document.body.prepend(fragment);
  console.log('🚀 ~ file: garagePage.ts ~ line 6 ~ createGaragePage');
}

export default createGaragePage;
