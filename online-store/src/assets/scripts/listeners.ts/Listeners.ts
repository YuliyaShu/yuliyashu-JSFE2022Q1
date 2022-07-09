import ShopView from "../view/ShopView";

class Listeners {
  static clickStartButton() {
    const startPageButton = document.querySelector('.start-page__button');
     if (startPageButton) {
      startPageButton.addEventListener('click', () => {
        const catalogPage = new ShopView();
        const body = document.querySelector('body');
        if (body) {
          body.innerHTML = '';
        }
        catalogPage.createCatalogPage();
      })
     }
  }
}

export default Listeners;
